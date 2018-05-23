// 开始绘画
function Draw(id = null) {
    if (id) {
        var canvas = document.getElementById(id);
        var w = canvas.width;
        var h = canvas.height;

        var dpr = window.devicePixelRatio || 1;

        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';

        canvas.width = dpr * w;
        canvas.height = dpr * h;
    } else {
        var canvas = document.createElement('canvas');
        // var w = options.width;
        // var h = options.height;
    }
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    // customCanvas(this.context);
    document.body.appendChild(canvas);
}

// 绘画初始化
Draw.prototype.init = function (option) {
    this.data = option.data;
    this.data.forEach((item) => {
        if (item.type === 'shape') {
            Object.keys(item).forEach((obj) => {
                if (obj === 'rect') {
                    this.context.fillRect(item.rect[0], item.rect[1], item.rect[2], item.rect[3]);
                }
                if (obj === 'background') this.context.fillStyle = item[obj];
            });
        }
    });
};


var opt = {};

opt.fillRect = function (values) {
    console.log(values);
    this.apply = function (ctx) {
        ctx.fillRect(values);
    }
}

/**
 * 创建canvas相关属性
 * @param ctx
 * @param tempCtx
 */
function customCanvas(ctx) {
    var Properties = {
        "fillStyle": false,
        "fillRect": true,
    };
    for (var name in Properties) {
        if (Properties[name]) {
            ctx[name] = customCanvas.prototype.createFunction(name);
        } else {
            try {
                Object.defineProperty(ctx, name, customCanvas.prototype.createGetSet(name))
            } catch (error) {
                console.log(error);
            }
        }
    }
}

/**
 * canvas赋值方法
 * @param name
 * @return {function(): *}
 */
customCanvas.prototype.createFunction = function (name) {
    console.log(arguments, '11');
    return function () {
        return this[name].apply(this, arguments);
    }
}

/**
 * 直接赋值
 * @param name
 * @return {function(): *}
 */
customCanvas.prototype.createGetSet = function (name) {
    return {
        get: function () {
            return this[name];
        },
        set: function (v) {
            var old = this[name];
            if (old === v) {
                return;
            }
            this[name] = v;
        }
    }
}

/**
 * 主大类
 */
var MaxCanvas = {};

MaxCanvas.xhrLoad = function () {

};

MaxCanvas.Notifier = function () {
    var add = function (S, T, n) {
        // 添加动态加载
    }
};



