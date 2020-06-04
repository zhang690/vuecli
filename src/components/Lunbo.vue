<template>
  <div>
    <div>
      <div class="lunbo">
        <div class="lunbo-view" ref="lunboView">
          <div class="lunbo-img">
            <img src="http://img4.imgtn.bdimg.com/it/u=3544645869,1290052097&fm=26&gp=0.jpg" />
          </div>
          <div class="lunbo-img">
            <img src="http://img2.imgtn.bdimg.com/it/u=2569462725,2846192127&fm=26&gp=0.jpg" />
          </div>
          <div class="lunbo-img">
            <img src="http://img5.imgtn.bdimg.com/it/u=3445416201,435356528&fm=11&gp=0.jpg" />
          </div>
        </div>
        <button @click="change">点击</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newArr:[1,2,3],
      flag: false,
      timeId: null,
      elements: [],
      arr: [
        {
          width: 334,
          height: 152,
          top: 56,
          left: -324,
          borderRadius: 10,
          zIndex: 0
        },
        // 中间
        {
          width: 334,
          height: 164,
          top: 50,
          left: 20,
          borderRadius: 10,
          zIndex: 1
        },
        {
          width: 334,
          height: 152,
          top: 56,
          left: 364,
          borderRadius: 10,
          zIndex: 0
        },
        {
          width: 334,
          height: 152,
          top: 56,
          left: 704,
          borderRadius: 10,
          zIndex: 0
        }
      ]
    };
  },
  mounted() {
    let obj = this.$refs.lunboView.children;
    for (let key in obj) {
      if (obj[key].tabIndex === -1) {
        this.elements.push(obj[key]);
      }
    }
    this.change();
    this.autoAnimate();
  },
  beforeDestroy() {
    clearInterval(this.timeId);
  },
  watch: {
    elements() {
      this.change();
    }
  },
  methods: {
    change() {
      if (this.flag) {
        return;
      }
      for (let i = 0; i < this.elements.length; i++) {
        this.changeAnimate(this.elements[i], this.arr[i]);
      }
    },
    // 封装轮播
    changeAnimate(element, target) {
      this.flag = true;
      let timer = setInterval(() => {
        let allArive = true;
        for (let key in target) {
          if (key === "zIndex") {
            element.style[key] = target[key];
          }
          let current = "";
          if (!element.style[key]) {
            current = 0;
          } else {
            current = parseInt(element.style[key]);
          }
          let step = (target[key] - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          if (Math.abs(target[key] - current) > Math.abs(step)) {
            current += step;
            element.style[key] = current + "px";
          } else {
            element.style[key] = target[key] + "px";
          }
          if (target[key] != current) {
            allArive = false;
          }
        }
        if (allArive) {
          clearInterval(timer);
          this.flag = false;
        }
      }, 30);
    },
    
    
    // 更新数据
    autoAnimate() {
      if (this.timeId) {
        clearInterval(this.timeId);
      }
      this.timeId = setInterval(() => {
        this.elements.push(this.elements.shift());
        },3000);
    }
  }
};
</script>

<style>
button {
  margin-top: 300px;
}
.lunbo {
  width: 375px;
  overflow: hidden;
}
.lunbo-img {
  overflow: hidden;
  position: fixed;
}

.point {
  position: fixed;
  left: 150px;
  width: 6.1875rem;
  height: 0.4375rem;
  display: flex;
  justify-content: space-between;
}
.point-click {
  text-align: center;
  width: 1.4375rem;
  height: 1.4375rem;
  border-radius: 50%;
  background-color: #ff0000;
}
</style>