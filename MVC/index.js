(function () {
  function init() {
    model.init();
    view.render();
    controller.init();
  }

  const model = {
    data: {
      a: 0,
      b: 0,
      s: "+",
      r: 0,
    },
    init() {
      const _this = this;
      for (let k in _this.data) {
        (function (k) {
          Object.defineProperty(_this, k, {
            get(target, property, receiver) {
              return _this.data[k];
            },
            set(newValue) {
              _this.data[k] = newValue;
              view.render({ [k]: newValue });
            },
          });
        })(k);
      }
    },
  };

  const view = {
    el: "#app",
    template: `
    <p>
      <span class='cal-a'>{{ a }}</span>
      <span class='cal-s'>{{ s }}</span>
      <span class='cal-b'>{{ b }}</span>
      <span> = </span>
      <span class='cal-r'>{{ r }}</span>
    </p>
    <p>
      <div>
        <input class='cal-input a' type="text" placeholder="Number a">
      </div>
      <div>
        <input class='cal-input b' type="text" placeholder="Number b">
      </div>
    </p>
    <p>
      <button class='cal-btn add'>+</button>
      <button class='cal-btn sub'>-</button>
      <button class='cal-btn mul'>*</button>
      <button class='cal-btn div'>/</button>
    </p>
    `,
    render(mutedData) {
      if (!mutedData) {
        this.template = this.template.replace(
          /\{\{(.*?)\}\}/g,
          function (node, key) {
            return model[key.trim()];
          }
        );
        const container = document.createElement("div");
        container.innerHTML = this.template;
        document.querySelector(this.el).appendChild(container);
      } else {
        for (let k in mutedData) {
          document.querySelector(`.cal-${k}`).textContent = mutedData[k];
        }
      }
    },
  };

  const controller = {
    init() {
      const oInputs = document.querySelectorAll(".cal-input");
      const oBtns = document.querySelectorAll(".cal-btn");
      let inputItem, btnItem;

      oInputs.forEach((item) => {
        inputItem = item;
        inputItem.addEventListener("input", this.handleInput, false);
      });

      oBtns.forEach((item) => {
        btnItem = item;
        btnItem.addEventListener("click", this.handleBtn, false);
      });
    },
    handleInput(even) {
      let target = even.target,
        value = Number(target.value),
        field = target.className.split(" ")[1];

      model[field] = value;

      with (model) {
        r = eval(`${a}${s}${b}`);
      }
    },
    handleBtn(even) {
      model.s = even.target.textContent;

      with (model) {
        r = eval(`${a}${s}${b}`);
      }
    },
  };

  init();
})();
