var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/rxjs/_esm5/internal/util/isArray.js
var isArray;
var init_isArray = __esm({
  "node_modules/rxjs/_esm5/internal/util/isArray.js"() {
    isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/rxjs/_esm5/internal/util/isObject.js
function isObject(x) {
  return x !== null && typeof x === "object";
}
var init_isObject = __esm({
  "node_modules/rxjs/_esm5/internal/util/isObject.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/util/isFunction.js
function isFunction(x) {
  return typeof x === "function";
}
var init_isFunction = __esm({
  "node_modules/rxjs/_esm5/internal/util/isFunction.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionErrorImpl, UnsubscriptionError;
var init_UnsubscriptionError = __esm({
  "node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"() {
    UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/rxjs/_esm5/internal/Subscription.js
function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function(errs, err) {
    return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
  }, []);
}
var Subscription;
var init_Subscription = __esm({
  "node_modules/rxjs/_esm5/internal/Subscription.js"() {
    init_isArray();
    init_isObject();
    init_isFunction();
    init_UnsubscriptionError();
    Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }
        if (isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];
                if (e instanceof UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty3) {
        empty3.closed = true;
        return empty3;
      }(new Subscription2());
      return Subscription2;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/util/identity.js
function identity(x) {
  return x;
}
var init_identity = __esm({
  "node_modules/rxjs/_esm5/internal/util/identity.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/util/pipe.js
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var init_pipe = __esm({
  "node_modules/rxjs/_esm5/internal/util/pipe.js"() {
    init_identity();
  }
});

// node_modules/rxjs/node_modules/tslib/tslib.es6.js
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var extendStatics;
var init_tslib_es6 = __esm({
  "node_modules/rxjs/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (b2.hasOwnProperty(p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
  }
});

// node_modules/rxjs/_esm5/internal/config.js
var _enable_super_gross_mode_that_will_cause_bad_things, config;
var init_config = __esm({
  "node_modules/rxjs/_esm5/internal/config.js"() {
    _enable_super_gross_mode_that_will_cause_bad_things = false;
    config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/rxjs/_esm5/internal/util/hostReportError.js
function hostReportError(err) {
  setTimeout(function() {
    throw err;
  }, 0);
}
var init_hostReportError = __esm({
  "node_modules/rxjs/_esm5/internal/util/hostReportError.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/Observer.js
var empty;
var init_Observer = __esm({
  "node_modules/rxjs/_esm5/internal/Observer.js"() {
    init_config();
    init_hostReportError();
    empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
var rxSubscriber;
var init_rxSubscriber = __esm({
  "node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"() {
    rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
  }
});

// node_modules/rxjs/_esm5/internal/Subscriber.js
var Subscriber, SafeSubscriber;
var init_Subscriber = __esm({
  "node_modules/rxjs/_esm5/internal/Subscriber.js"() {
    init_tslib_es6();
    init_isFunction();
    init_Observer();
    init_Subscription();
    init_rxSubscriber();
    init_config();
    init_hostReportError();
    Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error, complete) {
        var subscriber = new Subscriber2(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription);
    SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== empty) {
            context = Object.create(observerOrNext);
            if (isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/util/canReportError.js
function canReportError(observer) {
  while (observer) {
    var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }
  return true;
}
var init_canReportError = __esm({
  "node_modules/rxjs/_esm5/internal/util/canReportError.js"() {
    init_Subscriber();
  }
});

// node_modules/rxjs/_esm5/internal/util/toSubscriber.js
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof Subscriber) {
      return nextOrObserver;
    }
    if (nextOrObserver[rxSubscriber]) {
      return nextOrObserver[rxSubscriber]();
    }
  }
  if (!nextOrObserver && !error && !complete) {
    return new Subscriber(empty);
  }
  return new Subscriber(nextOrObserver, error, complete);
}
var init_toSubscriber = __esm({
  "node_modules/rxjs/_esm5/internal/util/toSubscriber.js"() {
    init_Subscriber();
    init_rxSubscriber();
    init_Observer();
  }
});

// node_modules/rxjs/_esm5/internal/symbol/observable.js
var observable;
var init_observable = __esm({
  "node_modules/rxjs/_esm5/internal/symbol/observable.js"() {
    observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/_esm5/internal/Observable.js
function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = config.Promise || Promise;
  }
  if (!promiseCtor) {
    throw new Error("no Promise impl found");
  }
  return promiseCtor;
}
var Observable;
var init_Observable = __esm({
  "node_modules/rxjs/_esm5/internal/Observable.js"() {
    init_canReportError();
    init_toSubscriber();
    init_observable();
    init_pipe();
    init_config();
    Observable = function() {
      function Observable2(subscribe) {
        this._isScalar = false;
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable2 = new Observable2();
        observable2.source = this;
        observable2.operator = operator;
        return observable2;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedErrorImpl, ObjectUnsubscribedError;
var init_ObjectUnsubscribedError = __esm({
  "node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"() {
    ObjectUnsubscribedErrorImpl = function() {
      function ObjectUnsubscribedErrorImpl2() {
        Error.call(this);
        this.message = "object unsubscribed";
        this.name = "ObjectUnsubscribedError";
        return this;
      }
      ObjectUnsubscribedErrorImpl2.prototype = Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl2;
    }();
    ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
  }
});

// node_modules/rxjs/_esm5/internal/SubjectSubscription.js
var SubjectSubscription;
var init_SubjectSubscription = __esm({
  "node_modules/rxjs/_esm5/internal/SubjectSubscription.js"() {
    init_tslib_es6();
    init_Subscription();
    SubjectSubscription = function(_super) {
      __extends(SubjectSubscription2, _super);
      function SubjectSubscription2(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
      }
      SubjectSubscription2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
          return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
          observers.splice(subscriberIndex, 1);
        }
      };
      return SubjectSubscription2;
    }(Subscription);
  }
});

// node_modules/rxjs/_esm5/internal/Subject.js
var SubjectSubscriber, Subject, AnonymousSubject;
var init_Subject = __esm({
  "node_modules/rxjs/_esm5/internal/Subject.js"() {
    init_tslib_es6();
    init_Observable();
    init_Subscriber();
    init_Subscription();
    init_ObjectUnsubscribedError();
    init_SubjectSubscription();
    init_rxSubscriber();
    SubjectSubscriber = function(_super) {
      __extends(SubjectSubscriber2, _super);
      function SubjectSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
      }
      return SubjectSubscriber2;
    }(Subscriber);
    Subject = function(_super) {
      __extends(Subject2, _super);
      function Subject2() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject2.prototype[rxSubscriber] = function() {
        return new SubjectSubscriber(this);
      };
      Subject2.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject2.prototype.next = function(value) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();
          for (var i = 0; i < len; i++) {
            copy[i].next(value);
          }
        }
      };
      Subject2.prototype.error = function(err) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].error(err);
        }
        this.observers.length = 0;
      };
      Subject2.prototype.complete = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
          copy[i].complete();
        }
        this.observers.length = 0;
      };
      Subject2.prototype.unsubscribe = function() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
      };
      Subject2.prototype._trySubscribe = function(subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else {
          return _super.prototype._trySubscribe.call(this, subscriber);
        }
      };
      Subject2.prototype._subscribe = function(subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription.EMPTY;
        } else if (this.isStopped) {
          subscriber.complete();
          return Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          return new SubjectSubscription(this, subscriber);
        }
      };
      Subject2.prototype.asObservable = function() {
        var observable2 = new Observable();
        observable2.source = this;
        return observable2;
      };
      Subject2.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject2;
    }(Observable);
    AnonymousSubject = function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      AnonymousSubject2.prototype.next = function(value) {
        var destination = this.destination;
        if (destination && destination.next) {
          destination.next(value);
        }
      };
      AnonymousSubject2.prototype.error = function(err) {
        var destination = this.destination;
        if (destination && destination.error) {
          this.destination.error(err);
        }
      };
      AnonymousSubject2.prototype.complete = function() {
        var destination = this.destination;
        if (destination && destination.complete) {
          this.destination.complete();
        }
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        if (source) {
          return this.source.subscribe(subscriber);
        } else {
          return Subscription.EMPTY;
        }
      };
      return AnonymousSubject2;
    }(Subject);
  }
});

// node_modules/rxjs/_esm5/internal/operators/refCount.js
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}
var RefCountOperator, RefCountSubscriber;
var init_refCount = __esm({
  "node_modules/rxjs/_esm5/internal/operators/refCount.js"() {
    init_tslib_es6();
    init_Subscriber();
    RefCountOperator = function() {
      function RefCountOperator3(connectable) {
        this.connectable = connectable;
      }
      RefCountOperator3.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
          refCounter.connection = connectable.connect();
        }
        return subscription;
      };
      return RefCountOperator3;
    }();
    RefCountSubscriber = function(_super) {
      __extends(RefCountSubscriber3, _super);
      function RefCountSubscriber3(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
      }
      RefCountSubscriber3.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
          this.connection = null;
          return;
        }
        this.connectable = null;
        var refCount2 = connectable._refCount;
        if (refCount2 <= 0) {
          this.connection = null;
          return;
        }
        connectable._refCount = refCount2 - 1;
        if (refCount2 > 1) {
          this.connection = null;
          return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
          sharedConnection.unsubscribe();
        }
      };
      return RefCountSubscriber3;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js
var ConnectableObservable, connectableObservableDescriptor, ConnectableSubscriber, RefCountOperator2, RefCountSubscriber2;
var init_ConnectableObservable = __esm({
  "node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js"() {
    init_tslib_es6();
    init_Subject();
    init_Observable();
    init_Subscriber();
    init_Subscription();
    init_refCount();
    ConnectableObservable = function(_super) {
      __extends(ConnectableObservable2, _super);
      function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
      }
      ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
          this._subject = this.subjectFactory();
        }
        return this._subject;
      };
      ConnectableObservable2.prototype.connect = function() {
        var connection = this._connection;
        if (!connection) {
          this._isComplete = false;
          connection = this._connection = new Subscription();
          connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
          if (connection.closed) {
            this._connection = null;
            connection = Subscription.EMPTY;
          }
        }
        return connection;
      };
      ConnectableObservable2.prototype.refCount = function() {
        return refCount()(this);
      };
      return ConnectableObservable2;
    }(Observable);
    connectableObservableDescriptor = function() {
      var connectableProto = ConnectableObservable.prototype;
      return {
        operator: { value: null },
        _refCount: { value: 0, writable: true },
        _subject: { value: null, writable: true },
        _connection: { value: null, writable: true },
        _subscribe: { value: connectableProto._subscribe },
        _isComplete: { value: connectableProto._isComplete, writable: true },
        getSubject: { value: connectableProto.getSubject },
        connect: { value: connectableProto.connect },
        refCount: { value: connectableProto.refCount }
      };
    }();
    ConnectableSubscriber = function(_super) {
      __extends(ConnectableSubscriber2, _super);
      function ConnectableSubscriber2(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
      }
      ConnectableSubscriber2.prototype._error = function(err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
      };
      ConnectableSubscriber2.prototype._complete = function() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
      };
      ConnectableSubscriber2.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (connectable) {
          this.connectable = null;
          var connection = connectable._connection;
          connectable._refCount = 0;
          connectable._subject = null;
          connectable._connection = null;
          if (connection) {
            connection.unsubscribe();
          }
        }
      };
      return ConnectableSubscriber2;
    }(SubjectSubscriber);
    RefCountOperator2 = function() {
      function RefCountOperator3(connectable) {
        this.connectable = connectable;
      }
      RefCountOperator3.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber2(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
          refCounter.connection = connectable.connect();
        }
        return subscription;
      };
      return RefCountOperator3;
    }();
    RefCountSubscriber2 = function(_super) {
      __extends(RefCountSubscriber3, _super);
      function RefCountSubscriber3(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
      }
      RefCountSubscriber3.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
          this.connection = null;
          return;
        }
        this.connectable = null;
        var refCount2 = connectable._refCount;
        if (refCount2 <= 0) {
          this.connection = null;
          return;
        }
        connectable._refCount = refCount2 - 1;
        if (refCount2 > 1) {
          this.connection = null;
          return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
          sharedConnection.unsubscribe();
        }
      };
      return RefCountSubscriber3;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/BehaviorSubject.js
var BehaviorSubject;
var init_BehaviorSubject = __esm({
  "node_modules/rxjs/_esm5/internal/BehaviorSubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_ObjectUnsubscribedError();
    BehaviorSubject = function(_super) {
      __extends(BehaviorSubject2, _super);
      function BehaviorSubject2(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      Object.defineProperty(BehaviorSubject2.prototype, "value", {
        get: function() {
          return this.getValue();
        },
        enumerable: true,
        configurable: true
      });
      BehaviorSubject2.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
          subscriber.next(this._value);
        }
        return subscription;
      };
      BehaviorSubject2.prototype.getValue = function() {
        if (this.hasError) {
          throw this.thrownError;
        } else if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else {
          return this._value;
        }
      };
      BehaviorSubject2.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject2;
    }(Subject);
  }
});

// node_modules/rxjs/_esm5/internal/observable/empty.js
function empty2(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(function(subscriber) {
    return scheduler.schedule(function() {
      return subscriber.complete();
    });
  });
}
var EMPTY;
var init_empty = __esm({
  "node_modules/rxjs/_esm5/internal/observable/empty.js"() {
    init_Observable();
    EMPTY = new Observable(function(subscriber) {
      return subscriber.complete();
    });
  }
});

// node_modules/rxjs/_esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && typeof value.schedule === "function";
}
var init_isScheduler = __esm({
  "node_modules/rxjs/_esm5/internal/util/isScheduler.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/util/subscribeToArray.js
var subscribeToArray;
var init_subscribeToArray = __esm({
  "node_modules/rxjs/_esm5/internal/util/subscribeToArray.js"() {
    subscribeToArray = function(array) {
      return function(subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      };
    };
  }
});

// node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    var i = 0;
    sub.add(scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
        return;
      }
      subscriber.next(input[i++]);
      if (!subscriber.closed) {
        sub.add(this.schedule());
      }
    }));
    return sub;
  });
}
var init_scheduleArray = __esm({
  "node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js"() {
    init_Observable();
    init_Subscription();
  }
});

// node_modules/rxjs/_esm5/internal/observable/fromArray.js
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new Observable(subscribeToArray(input));
  } else {
    return scheduleArray(input, scheduler);
  }
}
var init_fromArray = __esm({
  "node_modules/rxjs/_esm5/internal/observable/fromArray.js"() {
    init_Observable();
    init_subscribeToArray();
    init_scheduleArray();
  }
});

// node_modules/rxjs/_esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = args[args.length - 1];
  if (isScheduler(scheduler)) {
    args.pop();
    return scheduleArray(args, scheduler);
  } else {
    return fromArray(args);
  }
}
var init_of = __esm({
  "node_modules/rxjs/_esm5/internal/observable/of.js"() {
    init_isScheduler();
    init_fromArray();
    init_scheduleArray();
  }
});

// node_modules/rxjs/_esm5/internal/observable/throwError.js
function throwError(error, scheduler) {
  if (!scheduler) {
    return new Observable(function(subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new Observable(function(subscriber) {
      return scheduler.schedule(dispatch, 0, { error, subscriber });
    });
  }
}
function dispatch(_a) {
  var error = _a.error, subscriber = _a.subscriber;
  subscriber.error(error);
}
var init_throwError = __esm({
  "node_modules/rxjs/_esm5/internal/observable/throwError.js"() {
    init_Observable();
  }
});

// node_modules/rxjs/_esm5/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || typeof obj.lift === "function" && typeof obj.subscribe === "function");
}
var init_isObservable = __esm({
  "node_modules/rxjs/_esm5/internal/util/isObservable.js"() {
    init_Observable();
  }
});

// node_modules/rxjs/_esm5/internal/util/EmptyError.js
var EmptyErrorImpl, EmptyError;
var init_EmptyError = __esm({
  "node_modules/rxjs/_esm5/internal/util/EmptyError.js"() {
    EmptyErrorImpl = function() {
      function EmptyErrorImpl2() {
        Error.call(this);
        this.message = "no elements in sequence";
        this.name = "EmptyError";
        return this;
      }
      EmptyErrorImpl2.prototype = Object.create(Error.prototype);
      return EmptyErrorImpl2;
    }();
    EmptyError = EmptyErrorImpl;
  }
});

// node_modules/rxjs/_esm5/internal/operators/map.js
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== "function") {
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    }
    return source.lift(new MapOperator(project, thisArg));
  };
}
var MapOperator, MapSubscriber;
var init_map = __esm({
  "node_modules/rxjs/_esm5/internal/operators/map.js"() {
    init_tslib_es6();
    init_Subscriber();
    MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/OuterSubscriber.js
var OuterSubscriber;
var init_OuterSubscriber = __esm({
  "node_modules/rxjs/_esm5/internal/OuterSubscriber.js"() {
    init_tslib_es6();
    init_Subscriber();
    OuterSubscriber = function(_super) {
      __extends(OuterSubscriber2, _super);
      function OuterSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      OuterSubscriber2.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
      };
      OuterSubscriber2.prototype.notifyError = function(error, innerSub) {
        this.destination.error(error);
      };
      OuterSubscriber2.prototype.notifyComplete = function(innerSub) {
        this.destination.complete();
      };
      return OuterSubscriber2;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/InnerSubscriber.js
var InnerSubscriber;
var init_InnerSubscriber = __esm({
  "node_modules/rxjs/_esm5/internal/InnerSubscriber.js"() {
    init_tslib_es6();
    init_Subscriber();
    InnerSubscriber = function(_super) {
      __extends(InnerSubscriber2, _super);
      function InnerSubscriber2(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
      }
      InnerSubscriber2.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
      };
      InnerSubscriber2.prototype._error = function(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
      };
      InnerSubscriber2.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
      };
      return InnerSubscriber2;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js
var subscribeToPromise;
var init_subscribeToPromise = __esm({
  "node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js"() {
    init_hostReportError();
    subscribeToPromise = function(promise) {
      return function(subscriber) {
        promise.then(function(value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function(err) {
          return subscriber.error(err);
        }).then(null, hostReportError);
        return subscriber;
      };
    };
  }
});

// node_modules/rxjs/_esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator;
var init_iterator = __esm({
  "node_modules/rxjs/_esm5/internal/symbol/iterator.js"() {
    iterator = getSymbolIterator();
  }
});

// node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js
var subscribeToIterable;
var init_subscribeToIterable = __esm({
  "node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js"() {
    init_iterator();
    subscribeToIterable = function(iterable) {
      return function(subscriber) {
        var iterator2 = iterable[iterator]();
        do {
          var item = void 0;
          try {
            item = iterator2.next();
          } catch (err) {
            subscriber.error(err);
            return subscriber;
          }
          if (item.done) {
            subscriber.complete();
            break;
          }
          subscriber.next(item.value);
          if (subscriber.closed) {
            break;
          }
        } while (true);
        if (typeof iterator2.return === "function") {
          subscriber.add(function() {
            if (iterator2.return) {
              iterator2.return();
            }
          });
        }
        return subscriber;
      };
    };
  }
});

// node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js
var subscribeToObservable;
var init_subscribeToObservable = __esm({
  "node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js"() {
    init_observable();
    subscribeToObservable = function(obj) {
      return function(subscriber) {
        var obs = obj[observable]();
        if (typeof obs.subscribe !== "function") {
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        } else {
          return obs.subscribe(subscriber);
        }
      };
    };
  }
});

// node_modules/rxjs/_esm5/internal/util/isArrayLike.js
var isArrayLike;
var init_isArrayLike = __esm({
  "node_modules/rxjs/_esm5/internal/util/isArrayLike.js"() {
    isArrayLike = function(x) {
      return x && typeof x.length === "number" && typeof x !== "function";
    };
  }
});

// node_modules/rxjs/_esm5/internal/util/isPromise.js
function isPromise(value) {
  return !!value && typeof value.subscribe !== "function" && typeof value.then === "function";
}
var init_isPromise = __esm({
  "node_modules/rxjs/_esm5/internal/util/isPromise.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/util/subscribeTo.js
var subscribeTo;
var init_subscribeTo = __esm({
  "node_modules/rxjs/_esm5/internal/util/subscribeTo.js"() {
    init_subscribeToArray();
    init_subscribeToPromise();
    init_subscribeToIterable();
    init_subscribeToObservable();
    init_isArrayLike();
    init_isPromise();
    init_isObject();
    init_iterator();
    init_observable();
    subscribeTo = function(result) {
      if (!!result && typeof result[observable] === "function") {
        return subscribeToObservable(result);
      } else if (isArrayLike(result)) {
        return subscribeToArray(result);
      } else if (isPromise(result)) {
        return subscribeToPromise(result);
      } else if (!!result && typeof result[iterator] === "function") {
        return subscribeToIterable(result);
      } else {
        var value = isObject(result) ? "an invalid object" : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
        throw new TypeError(msg);
      }
    };
  }
});

// node_modules/rxjs/_esm5/internal/util/subscribeToResult.js
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
  if (innerSubscriber === void 0) {
    innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }
  if (innerSubscriber.closed) {
    return void 0;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  return subscribeTo(result)(innerSubscriber);
}
var init_subscribeToResult = __esm({
  "node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"() {
    init_InnerSubscriber();
    init_subscribeTo();
    init_Observable();
  }
});

// node_modules/rxjs/_esm5/internal/observable/combineLatest.js
function combineLatest() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var resultSelector = void 0;
  var scheduler = void 0;
  if (isScheduler(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }
  if (typeof observables[observables.length - 1] === "function") {
    resultSelector = observables.pop();
  }
  if (observables.length === 1 && isArray(observables[0])) {
    observables = observables[0];
  }
  return fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var NONE, CombineLatestOperator, CombineLatestSubscriber;
var init_combineLatest = __esm({
  "node_modules/rxjs/_esm5/internal/observable/combineLatest.js"() {
    init_tslib_es6();
    init_isScheduler();
    init_isArray();
    init_OuterSubscriber();
    init_subscribeToResult();
    init_fromArray();
    NONE = {};
    CombineLatestOperator = function() {
      function CombineLatestOperator2(resultSelector) {
        this.resultSelector = resultSelector;
      }
      CombineLatestOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
      };
      return CombineLatestOperator2;
    }();
    CombineLatestSubscriber = function(_super) {
      __extends(CombineLatestSubscriber2, _super);
      function CombineLatestSubscriber2(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
      }
      CombineLatestSubscriber2.prototype._next = function(observable2) {
        this.values.push(NONE);
        this.observables.push(observable2);
      };
      CombineLatestSubscriber2.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
          this.destination.complete();
        } else {
          this.active = len;
          this.toRespond = len;
          for (var i = 0; i < len; i++) {
            var observable2 = observables[i];
            this.add(subscribeToResult(this, observable2, void 0, i));
          }
        }
      };
      CombineLatestSubscriber2.prototype.notifyComplete = function(unused) {
        if ((this.active -= 1) === 0) {
          this.destination.complete();
        }
      };
      CombineLatestSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
          if (this.resultSelector) {
            this._tryResultSelector(values);
          } else {
            this.destination.next(values.slice());
          }
        }
      };
      CombineLatestSubscriber2.prototype._tryResultSelector = function(values) {
        var result;
        try {
          result = this.resultSelector.apply(this, values);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return CombineLatestSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    sub.add(scheduler.schedule(function() {
      var observable2 = input[observable]();
      sub.add(observable2.subscribe({
        next: function(value) {
          sub.add(scheduler.schedule(function() {
            return subscriber.next(value);
          }));
        },
        error: function(err) {
          sub.add(scheduler.schedule(function() {
            return subscriber.error(err);
          }));
        },
        complete: function() {
          sub.add(scheduler.schedule(function() {
            return subscriber.complete();
          }));
        }
      }));
    }));
    return sub;
  });
}
var init_scheduleObservable = __esm({
  "node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js"() {
    init_Observable();
    init_Subscription();
    init_observable();
  }
});

// node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    sub.add(scheduler.schedule(function() {
      return input.then(function(value) {
        sub.add(scheduler.schedule(function() {
          subscriber.next(value);
          sub.add(scheduler.schedule(function() {
            return subscriber.complete();
          }));
        }));
      }, function(err) {
        sub.add(scheduler.schedule(function() {
          return subscriber.error(err);
        }));
      });
    }));
    return sub;
  });
}
var init_schedulePromise = __esm({
  "node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js"() {
    init_Observable();
    init_Subscription();
  }
});

// node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    var sub = new Subscription();
    var iterator2;
    sub.add(function() {
      if (iterator2 && typeof iterator2.return === "function") {
        iterator2.return();
      }
    });
    sub.add(scheduler.schedule(function() {
      iterator2 = input[iterator]();
      sub.add(scheduler.schedule(function() {
        if (subscriber.closed) {
          return;
        }
        var value;
        var done;
        try {
          var result = iterator2.next();
          value = result.value;
          done = result.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
          this.schedule();
        }
      }));
    }));
    return sub;
  });
}
var init_scheduleIterable = __esm({
  "node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js"() {
    init_Observable();
    init_Subscription();
    init_iterator();
  }
});

// node_modules/rxjs/_esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return input && typeof input[observable] === "function";
}
var init_isInteropObservable = __esm({
  "node_modules/rxjs/_esm5/internal/util/isInteropObservable.js"() {
    init_observable();
  }
});

// node_modules/rxjs/_esm5/internal/util/isIterable.js
function isIterable(input) {
  return input && typeof input[iterator] === "function";
}
var init_isIterable = __esm({
  "node_modules/rxjs/_esm5/internal/util/isIterable.js"() {
    init_iterator();
  }
});

// node_modules/rxjs/_esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    } else if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    } else if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    } else if (isIterable(input) || typeof input === "string") {
      return scheduleIterable(input, scheduler);
    }
  }
  throw new TypeError((input !== null && typeof input || input) + " is not observable");
}
var init_scheduled = __esm({
  "node_modules/rxjs/_esm5/internal/scheduled/scheduled.js"() {
    init_scheduleObservable();
    init_schedulePromise();
    init_scheduleArray();
    init_scheduleIterable();
    init_isInteropObservable();
    init_isPromise();
    init_isArrayLike();
    init_isIterable();
  }
});

// node_modules/rxjs/_esm5/internal/observable/from.js
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof Observable) {
      return input;
    }
    return new Observable(subscribeTo(input));
  } else {
    return scheduled(input, scheduler);
  }
}
var init_from = __esm({
  "node_modules/rxjs/_esm5/internal/observable/from.js"() {
    init_Observable();
    init_subscribeTo();
    init_scheduled();
  }
});

// node_modules/rxjs/_esm5/internal/innerSubscribe.js
function innerSubscribe(result, innerSubscriber) {
  if (innerSubscriber.closed) {
    return void 0;
  }
  if (result instanceof Observable) {
    return result.subscribe(innerSubscriber);
  }
  var subscription;
  try {
    subscription = subscribeTo(result)(innerSubscriber);
  } catch (error) {
    innerSubscriber.error(error);
  }
  return subscription;
}
var SimpleInnerSubscriber, ComplexInnerSubscriber, SimpleOuterSubscriber, ComplexOuterSubscriber;
var init_innerSubscribe = __esm({
  "node_modules/rxjs/_esm5/internal/innerSubscribe.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Observable();
    init_subscribeTo();
    SimpleInnerSubscriber = function(_super) {
      __extends(SimpleInnerSubscriber2, _super);
      function SimpleInnerSubscriber2(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
      }
      SimpleInnerSubscriber2.prototype._next = function(value) {
        this.parent.notifyNext(value);
      };
      SimpleInnerSubscriber2.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
      };
      SimpleInnerSubscriber2.prototype._complete = function() {
        this.parent.notifyComplete();
        this.unsubscribe();
      };
      return SimpleInnerSubscriber2;
    }(Subscriber);
    ComplexInnerSubscriber = function(_super) {
      __extends(ComplexInnerSubscriber2, _super);
      function ComplexInnerSubscriber2(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
      }
      ComplexInnerSubscriber2.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
      };
      ComplexInnerSubscriber2.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
      };
      ComplexInnerSubscriber2.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
      };
      return ComplexInnerSubscriber2;
    }(Subscriber);
    SimpleOuterSubscriber = function(_super) {
      __extends(SimpleOuterSubscriber2, _super);
      function SimpleOuterSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      SimpleOuterSubscriber2.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
      };
      SimpleOuterSubscriber2.prototype.notifyError = function(err) {
        this.destination.error(err);
      };
      SimpleOuterSubscriber2.prototype.notifyComplete = function() {
        this.destination.complete();
      };
      return SimpleOuterSubscriber2;
    }(Subscriber);
    ComplexOuterSubscriber = function(_super) {
      __extends(ComplexOuterSubscriber2, _super);
      function ComplexOuterSubscriber2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ComplexOuterSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
      };
      ComplexOuterSubscriber2.prototype.notifyError = function(error) {
        this.destination.error(error);
      };
      ComplexOuterSubscriber2.prototype.notifyComplete = function(_innerSub) {
        this.destination.complete();
      };
      return ComplexOuterSubscriber2;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  if (typeof resultSelector === "function") {
    return function(source) {
      return source.pipe(mergeMap(function(a, i) {
        return from(project(a, i)).pipe(map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return function(source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}
var MergeMapOperator, MergeMapSubscriber;
var init_mergeMap = __esm({
  "node_modules/rxjs/_esm5/internal/operators/mergeMap.js"() {
    init_tslib_es6();
    init_map();
    init_from();
    init_innerSubscribe();
    MergeMapOperator = function() {
      function MergeMapOperator2(project, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
      }
      MergeMapOperator2.prototype.call = function(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
      };
      return MergeMapOperator2;
    }();
    MergeMapSubscriber = function(_super) {
      __extends(MergeMapSubscriber2, _super);
      function MergeMapSubscriber2(destination, project, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
      }
      MergeMapSubscriber2.prototype._next = function(value) {
        if (this.active < this.concurrent) {
          this._tryNext(value);
        } else {
          this.buffer.push(value);
        }
      };
      MergeMapSubscriber2.prototype._tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
          result = this.project(value, index);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.active++;
        this._innerSub(result);
      };
      MergeMapSubscriber2.prototype._innerSub = function(ish) {
        var innerSubscriber = new SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
          destination.add(innerSubscription);
        }
      };
      MergeMapSubscriber2.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
          this.destination.complete();
        }
        this.unsubscribe();
      };
      MergeMapSubscriber2.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
      };
      MergeMapSubscriber2.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
          this._next(buffer.shift());
        } else if (this.active === 0 && this.hasCompleted) {
          this.destination.complete();
        }
      };
      return MergeMapSubscriber2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/rxjs/_esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }
  return mergeMap(identity, concurrent);
}
var init_mergeAll = __esm({
  "node_modules/rxjs/_esm5/internal/operators/mergeAll.js"() {
    init_mergeMap();
    init_identity();
  }
});

// node_modules/rxjs/_esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}
var init_concatAll = __esm({
  "node_modules/rxjs/_esm5/internal/operators/concatAll.js"() {
    init_mergeAll();
  }
});

// node_modules/rxjs/_esm5/internal/observable/concat.js
function concat() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  return concatAll()(of.apply(void 0, observables));
}
var init_concat = __esm({
  "node_modules/rxjs/_esm5/internal/observable/concat.js"() {
    init_of();
    init_concatAll();
  }
});

// node_modules/rxjs/_esm5/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    var input;
    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var source = input ? from(input) : empty2();
    return source.subscribe(subscriber);
  });
}
var init_defer = __esm({
  "node_modules/rxjs/_esm5/internal/observable/defer.js"() {
    init_Observable();
    init_from();
    init_empty();
  }
});

// node_modules/rxjs/_esm5/internal/observable/forkJoin.js
function forkJoin() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 1) {
    var first_1 = sources[0];
    if (isArray(first_1)) {
      return forkJoinInternal(first_1, null);
    }
    if (isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
      var keys = Object.keys(first_1);
      return forkJoinInternal(keys.map(function(key) {
        return first_1[key];
      }), keys);
    }
  }
  if (typeof sources[sources.length - 1] === "function") {
    var resultSelector_1 = sources.pop();
    sources = sources.length === 1 && isArray(sources[0]) ? sources[0] : sources;
    return forkJoinInternal(sources, null).pipe(map(function(args) {
      return resultSelector_1.apply(void 0, args);
    }));
  }
  return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
  return new Observable(function(subscriber) {
    var len = sources.length;
    if (len === 0) {
      subscriber.complete();
      return;
    }
    var values = new Array(len);
    var completed = 0;
    var emitted = 0;
    var _loop_1 = function(i2) {
      var source = from(sources[i2]);
      var hasValue = false;
      subscriber.add(source.subscribe({
        next: function(value) {
          if (!hasValue) {
            hasValue = true;
            emitted++;
          }
          values[i2] = value;
        },
        error: function(err) {
          return subscriber.error(err);
        },
        complete: function() {
          completed++;
          if (completed === len || !hasValue) {
            if (emitted === len) {
              subscriber.next(keys ? keys.reduce(function(result, key, i3) {
                return result[key] = values[i3], result;
              }, {}) : values);
            }
            subscriber.complete();
          }
        }
      }));
    };
    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }
  });
}
var init_forkJoin = __esm({
  "node_modules/rxjs/_esm5/internal/observable/forkJoin.js"() {
    init_Observable();
    init_isArray();
    init_map();
    init_isObject();
    init_from();
  }
});

// node_modules/rxjs/_esm5/internal/observable/merge.js
function merge() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];
  if (isScheduler(last)) {
    scheduler = observables.pop();
    if (observables.length > 1 && typeof observables[observables.length - 1] === "number") {
      concurrent = observables.pop();
    }
  } else if (typeof last === "number") {
    concurrent = observables.pop();
  }
  if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
    return observables[0];
  }
  return mergeAll(concurrent)(fromArray(observables, scheduler));
}
var init_merge = __esm({
  "node_modules/rxjs/_esm5/internal/observable/merge.js"() {
    init_Observable();
    init_isScheduler();
    init_mergeAll();
    init_fromArray();
  }
});

// node_modules/rxjs/_esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}
var FilterOperator, FilterSubscriber;
var init_filter = __esm({
  "node_modules/rxjs/_esm5/internal/operators/filter.js"() {
    init_tslib_es6();
    init_Subscriber();
    FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber);
  }
});

// node_modules/rxjs/_esm5/internal/operators/groupBy.js
var GroupByOperator, GroupBySubscriber, GroupDurationSubscriber, GroupedObservable, InnerRefCountSubscription;
var init_groupBy = __esm({
  "node_modules/rxjs/_esm5/internal/operators/groupBy.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Subscription();
    init_Observable();
    init_Subject();
    GroupByOperator = function() {
      function GroupByOperator2(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
      }
      GroupByOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
      };
      return GroupByOperator2;
    }();
    GroupBySubscriber = function(_super) {
      __extends(GroupBySubscriber2, _super);
      function GroupBySubscriber2(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
      }
      GroupBySubscriber2.prototype._next = function(value) {
        var key;
        try {
          key = this.keySelector(value);
        } catch (err) {
          this.error(err);
          return;
        }
        this._group(value, key);
      };
      GroupBySubscriber2.prototype._group = function(value, key) {
        var groups = this.groups;
        if (!groups) {
          groups = this.groups = /* @__PURE__ */ new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
          try {
            element = this.elementSelector(value);
          } catch (err) {
            this.error(err);
          }
        } else {
          element = value;
        }
        if (!group) {
          group = this.subjectSelector ? this.subjectSelector() : new Subject();
          groups.set(key, group);
          var groupedObservable = new GroupedObservable(key, group, this);
          this.destination.next(groupedObservable);
          if (this.durationSelector) {
            var duration = void 0;
            try {
              duration = this.durationSelector(new GroupedObservable(key, group));
            } catch (err) {
              this.error(err);
              return;
            }
            this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
          }
        }
        if (!group.closed) {
          group.next(element);
        }
      };
      GroupBySubscriber2.prototype._error = function(err) {
        var groups = this.groups;
        if (groups) {
          groups.forEach(function(group, key) {
            group.error(err);
          });
          groups.clear();
        }
        this.destination.error(err);
      };
      GroupBySubscriber2.prototype._complete = function() {
        var groups = this.groups;
        if (groups) {
          groups.forEach(function(group, key) {
            group.complete();
          });
          groups.clear();
        }
        this.destination.complete();
      };
      GroupBySubscriber2.prototype.removeGroup = function(key) {
        this.groups.delete(key);
      };
      GroupBySubscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.attemptedToUnsubscribe = true;
          if (this.count === 0) {
            _super.prototype.unsubscribe.call(this);
          }
        }
      };
      return GroupBySubscriber2;
    }(Subscriber);
    GroupDurationSubscriber = function(_super) {
      __extends(GroupDurationSubscriber2, _super);
      function GroupDurationSubscriber2(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
      }
      GroupDurationSubscriber2.prototype._next = function(value) {
        this.complete();
      };
      GroupDurationSubscriber2.prototype._unsubscribe = function() {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
          parent.removeGroup(key);
        }
      };
      return GroupDurationSubscriber2;
    }(Subscriber);
    GroupedObservable = function(_super) {
      __extends(GroupedObservable2, _super);
      function GroupedObservable2(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
      }
      GroupedObservable2.prototype._subscribe = function(subscriber) {
        var subscription = new Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
          subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
      };
      return GroupedObservable2;
    }(Observable);
    InnerRefCountSubscription = function(_super) {
      __extends(InnerRefCountSubscription2, _super);
      function InnerRefCountSubscription2(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
      }
      InnerRefCountSubscription2.prototype.unsubscribe = function() {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
          _super.prototype.unsubscribe.call(this);
          parent.count -= 1;
          if (parent.count === 0 && parent.attemptedToUnsubscribe) {
            parent.unsubscribe();
          }
        }
      };
      return InnerRefCountSubscription2;
    }(Subscription);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/Action.js
var Action;
var init_Action = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/Action.js"() {
    init_tslib_es6();
    init_Subscription();
    Action = function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return this;
      };
      return Action2;
    }(Subscription);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
var AsyncAction;
var init_AsyncAction = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"() {
    init_tslib_es6();
    init_Action();
    AsyncAction = function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      AsyncAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
          return id;
        }
        clearInterval(id);
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state, delay) {
        var errored = false;
        var errorValue = void 0;
        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = !!e && e || new Error(e);
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype._unsubscribe = function() {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
          actions.splice(index, 1);
        }
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
      };
      return AsyncAction2;
    }(Action);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js
var QueueAction;
var init_QueueAction = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js"() {
    init_tslib_es6();
    init_AsyncAction();
    QueueAction = function(_super) {
      __extends(QueueAction2, _super);
      function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay > 0) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };
      QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
      };
      QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
      };
      return QueueAction2;
    }(AsyncAction);
  }
});

// node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler;
var init_Scheduler = __esm({
  "node_modules/rxjs/_esm5/internal/Scheduler.js"() {
    Scheduler = function() {
      function Scheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
      }
      Scheduler2.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
      };
      Scheduler2.now = function() {
        return Date.now();
      };
      return Scheduler2;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler;
var init_AsyncScheduler = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"() {
    init_tslib_es6();
    init_Scheduler();
    AsyncScheduler = function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function() {
          if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== _this) {
            return AsyncScheduler2.delegate.now();
          } else {
            return now();
          }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = void 0;
        return _this;
      }
      AsyncScheduler2.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        if (AsyncScheduler2.delegate && AsyncScheduler2.delegate !== this) {
          return AsyncScheduler2.delegate.schedule(work, delay, state);
        } else {
          return _super.prototype.schedule.call(this, work, delay, state);
        }
      };
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this.active) {
          actions.push(action);
          return;
        }
        var error;
        this.active = true;
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsyncScheduler2;
    }(Scheduler);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js
var QueueScheduler;
var init_QueueScheduler = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js"() {
    init_tslib_es6();
    init_AsyncScheduler();
    QueueScheduler = function(_super) {
      __extends(QueueScheduler2, _super);
      function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return QueueScheduler2;
    }(AsyncScheduler);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/queue.js
var queueScheduler, queue;
var init_queue = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/queue.js"() {
    init_QueueAction();
    init_QueueScheduler();
    queueScheduler = new QueueScheduler(QueueAction);
    queue = queueScheduler;
  }
});

// node_modules/rxjs/_esm5/internal/Notification.js
var NotificationKind, Notification;
var init_Notification = __esm({
  "node_modules/rxjs/_esm5/internal/Notification.js"() {
    init_empty();
    init_of();
    init_throwError();
    (function(NotificationKind2) {
      NotificationKind2["NEXT"] = "N";
      NotificationKind2["ERROR"] = "E";
      NotificationKind2["COMPLETE"] = "C";
    })(NotificationKind || (NotificationKind = {}));
    Notification = function() {
      function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }
      Notification2.prototype.observe = function(observer) {
        switch (this.kind) {
          case "N":
            return observer.next && observer.next(this.value);
          case "E":
            return observer.error && observer.error(this.error);
          case "C":
            return observer.complete && observer.complete();
        }
      };
      Notification2.prototype.do = function(next, error, complete) {
        var kind = this.kind;
        switch (kind) {
          case "N":
            return next && next(this.value);
          case "E":
            return error && error(this.error);
          case "C":
            return complete && complete();
        }
      };
      Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === "function") {
          return this.observe(nextOrObserver);
        } else {
          return this.do(nextOrObserver, error, complete);
        }
      };
      Notification2.prototype.toObservable = function() {
        var kind = this.kind;
        switch (kind) {
          case "N":
            return of(this.value);
          case "E":
            return throwError(this.error);
          case "C":
            return empty2();
        }
        throw new Error("unexpected notification kind value");
      };
      Notification2.createNext = function(value) {
        if (typeof value !== "undefined") {
          return new Notification2("N", value);
        }
        return Notification2.undefinedValueNotification;
      };
      Notification2.createError = function(err) {
        return new Notification2("E", void 0, err);
      };
      Notification2.createComplete = function() {
        return Notification2.completeNotification;
      };
      Notification2.completeNotification = new Notification2("C");
      Notification2.undefinedValueNotification = new Notification2("N", void 0);
      return Notification2;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/operators/observeOn.js
var ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage;
var init_observeOn = __esm({
  "node_modules/rxjs/_esm5/internal/operators/observeOn.js"() {
    init_tslib_es6();
    init_Subscriber();
    init_Notification();
    ObserveOnOperator = function() {
      function ObserveOnOperator2(scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
      }
      ObserveOnOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
      };
      return ObserveOnOperator2;
    }();
    ObserveOnSubscriber = function(_super) {
      __extends(ObserveOnSubscriber2, _super);
      function ObserveOnSubscriber2(destination, scheduler, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
      }
      ObserveOnSubscriber2.dispatch = function(arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
      };
      ObserveOnSubscriber2.prototype.scheduleMessage = function(notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber2.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
      };
      ObserveOnSubscriber2.prototype._next = function(value) {
        this.scheduleMessage(Notification.createNext(value));
      };
      ObserveOnSubscriber2.prototype._error = function(err) {
        this.scheduleMessage(Notification.createError(err));
        this.unsubscribe();
      };
      ObserveOnSubscriber2.prototype._complete = function() {
        this.scheduleMessage(Notification.createComplete());
        this.unsubscribe();
      };
      return ObserveOnSubscriber2;
    }(Subscriber);
    ObserveOnMessage = function() {
      function ObserveOnMessage2(notification, destination) {
        this.notification = notification;
        this.destination = destination;
      }
      return ObserveOnMessage2;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/ReplaySubject.js
var ReplaySubject, ReplayEvent;
var init_ReplaySubject = __esm({
  "node_modules/rxjs/_esm5/internal/ReplaySubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_queue();
    init_Subscription();
    init_observeOn();
    init_ObjectUnsubscribedError();
    init_SubjectSubscription();
    ReplaySubject = function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
          bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
          windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
          _this._infiniteTimeWindow = true;
          _this.next = _this.nextInfiniteTimeWindow;
        } else {
          _this.next = _this.nextTimeWindow;
        }
        return _this;
      }
      ReplaySubject2.prototype.nextInfiniteTimeWindow = function(value) {
        if (!this.isStopped) {
          var _events = this._events;
          _events.push(value);
          if (_events.length > this._bufferSize) {
            _events.shift();
          }
        }
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype.nextTimeWindow = function(value) {
        if (!this.isStopped) {
          this._events.push(new ReplayEvent(this._getNow(), value));
          this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        } else if (this.isStopped || this.hasError) {
          subscription = Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          subscription = new SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
          subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
          for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i]);
          }
        } else {
          for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
          }
        }
        if (this.hasError) {
          subscriber.error(this.thrownError);
        } else if (this.isStopped) {
          subscriber.complete();
        }
        return subscription;
      };
      ReplaySubject2.prototype._getNow = function() {
        return (this.scheduler || queue).now();
      };
      ReplaySubject2.prototype._trimBufferThenGetEvents = function() {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
          if (now - _events[spliceCount].time < _windowTime) {
            break;
          }
          spliceCount++;
        }
        if (eventsCount > _bufferSize) {
          spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
          _events.splice(0, spliceCount);
        }
        return _events;
      };
      return ReplaySubject2;
    }(Subject);
    ReplayEvent = function() {
      function ReplayEvent2(time, value) {
        this.time = time;
        this.value = value;
      }
      return ReplayEvent2;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/AsyncSubject.js
var AsyncSubject;
var init_AsyncSubject = __esm({
  "node_modules/rxjs/_esm5/internal/AsyncSubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_Subscription();
    AsyncSubject = function(_super) {
      __extends(AsyncSubject2, _super);
      function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
      }
      AsyncSubject2.prototype._subscribe = function(subscriber) {
        if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription.EMPTY;
        } else if (this.hasCompleted && this.hasNext) {
          subscriber.next(this.value);
          subscriber.complete();
          return Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
      };
      AsyncSubject2.prototype.next = function(value) {
        if (!this.hasCompleted) {
          this.value = value;
          this.hasNext = true;
        }
      };
      AsyncSubject2.prototype.error = function(error) {
        if (!this.hasCompleted) {
          _super.prototype.error.call(this, error);
        }
      };
      AsyncSubject2.prototype.complete = function() {
        this.hasCompleted = true;
        if (this.hasNext) {
          _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
      };
      return AsyncSubject2;
    }(Subject);
  }
});

// node_modules/rxjs/_esm5/internal/util/Immediate.js
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
var nextHandle, RESOLVED, activeHandles, Immediate;
var init_Immediate = __esm({
  "node_modules/rxjs/_esm5/internal/util/Immediate.js"() {
    nextHandle = 1;
    RESOLVED = function() {
      return Promise.resolve();
    }();
    activeHandles = {};
    Immediate = {
      setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function() {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function(handle) {
        findAndClearHandle(handle);
      }
    };
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js
var AsapAction;
var init_AsapAction = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js"() {
    init_tslib_es6();
    init_Immediate();
    init_AsyncAction();
    AsapAction = function(_super) {
      __extends(AsapAction2, _super);
      function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
      };
      AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
          Immediate.clearImmediate(id);
          scheduler.scheduled = void 0;
        }
        return void 0;
      };
      return AsapAction2;
    }(AsyncAction);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js
var AsapScheduler;
var init_AsapScheduler = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js"() {
    init_tslib_es6();
    init_AsyncScheduler();
    AsapScheduler = function(_super) {
      __extends(AsapScheduler2, _super);
      function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AsapScheduler2.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = void 0;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
          while (++index < count && (action = actions.shift())) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsapScheduler2;
    }(AsyncScheduler);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/asap.js
var asapScheduler, asap;
var init_asap = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/asap.js"() {
    init_AsapAction();
    init_AsapScheduler();
    asapScheduler = new AsapScheduler(AsapAction);
    asap = asapScheduler;
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/async.js
var asyncScheduler, async;
var init_async = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/async.js"() {
    init_AsyncAction();
    init_AsyncScheduler();
    asyncScheduler = new AsyncScheduler(AsyncAction);
    async = asyncScheduler;
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction;
var init_AnimationFrameAction = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js"() {
    init_tslib_es6();
    init_AsyncAction();
    AnimationFrameAction = function(_super) {
      __extends(AnimationFrameAction2, _super);
      function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function() {
          return scheduler.flush(null);
        }));
      };
      AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
          cancelAnimationFrame(id);
          scheduler.scheduled = void 0;
        }
        return void 0;
      };
      return AnimationFrameAction2;
    }(AsyncAction);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler;
var init_AnimationFrameScheduler = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js"() {
    init_tslib_es6();
    init_AsyncScheduler();
    AnimationFrameScheduler = function(_super) {
      __extends(AnimationFrameScheduler2, _super);
      function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AnimationFrameScheduler2.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = void 0;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
          while (++index < count && (action = actions.shift())) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AnimationFrameScheduler2;
    }(AsyncScheduler);
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler, animationFrame;
var init_animationFrame = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js"() {
    init_AnimationFrameAction();
    init_AnimationFrameScheduler();
    animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
    animationFrame = animationFrameScheduler;
  }
});

// node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js
var VirtualTimeScheduler, VirtualAction;
var init_VirtualTimeScheduler = __esm({
  "node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js"() {
    init_tslib_es6();
    init_AsyncAction();
    init_AsyncScheduler();
    VirtualTimeScheduler = function(_super) {
      __extends(VirtualTimeScheduler2, _super);
      function VirtualTimeScheduler2(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
          SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
          maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function() {
          return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
      }
      VirtualTimeScheduler2.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
          actions.shift();
          this.frame = action.delay;
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        }
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      VirtualTimeScheduler2.frameTimeFactor = 10;
      return VirtualTimeScheduler2;
    }(AsyncScheduler);
    VirtualAction = function(_super) {
      __extends(VirtualAction2, _super);
      function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
          index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
      }
      VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (!this.id) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction2(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
      };
      VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return true;
      };
      VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return void 0;
      };
      VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) {
          return _super.prototype._execute.call(this, state, delay);
        }
      };
      VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
          if (a.index === b.index) {
            return 0;
          } else if (a.index > b.index) {
            return 1;
          } else {
            return -1;
          }
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          return -1;
        }
      };
      return VirtualAction2;
    }(AsyncAction);
  }
});

// node_modules/rxjs/_esm5/internal/util/noop.js
function noop() {
}
var init_noop = __esm({
  "node_modules/rxjs/_esm5/internal/util/noop.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
var ArgumentOutOfRangeErrorImpl, ArgumentOutOfRangeError;
var init_ArgumentOutOfRangeError = __esm({
  "node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js"() {
    ArgumentOutOfRangeErrorImpl = function() {
      function ArgumentOutOfRangeErrorImpl2() {
        Error.call(this);
        this.message = "argument out of range";
        this.name = "ArgumentOutOfRangeError";
        return this;
      }
      ArgumentOutOfRangeErrorImpl2.prototype = Object.create(Error.prototype);
      return ArgumentOutOfRangeErrorImpl2;
    }();
    ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
  }
});

// node_modules/rxjs/_esm5/internal/util/TimeoutError.js
var TimeoutErrorImpl, TimeoutError;
var init_TimeoutError = __esm({
  "node_modules/rxjs/_esm5/internal/util/TimeoutError.js"() {
    TimeoutErrorImpl = function() {
      function TimeoutErrorImpl2() {
        Error.call(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        return this;
      }
      TimeoutErrorImpl2.prototype = Object.create(Error.prototype);
      return TimeoutErrorImpl2;
    }();
    TimeoutError = TimeoutErrorImpl;
  }
});

// node_modules/rxjs/_esm5/internal/observable/bindCallback.js
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function(args2) {
          return isArray(args2) ? resultSelector.apply(void 0, args2) : resultSelector(args2);
        }));
      };
    }
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var context = this;
    var subject;
    var params = {
      context,
      subject,
      callbackFunc,
      scheduler
    };
    return new Observable(function(subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new AsyncSubject();
          var handler = function() {
            var innerArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              innerArgs[_i2] = arguments[_i2];
            }
            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };
          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }
        return subject.subscribe(subscriber);
      } else {
        var state = {
          args,
          subscriber,
          params
        };
        return scheduler.schedule(dispatch2, 0, state);
      }
    });
  };
}
function dispatch2(state) {
  var _this = this;
  var self = this;
  var args = state.args, subscriber = state.subscriber, params = state.params;
  var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
  var subject = params.subject;
  if (!subject) {
    subject = params.subject = new AsyncSubject();
    var handler = function() {
      var innerArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }
      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
      _this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
    };
    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }
  this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
  var value = state.value, subject = state.subject;
  subject.next(value);
  subject.complete();
}
var init_bindCallback = __esm({
  "node_modules/rxjs/_esm5/internal/observable/bindCallback.js"() {
    init_Observable();
    init_AsyncSubject();
    init_map();
    init_canReportError();
    init_isArray();
    init_isScheduler();
  }
});

// node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map(function(args2) {
          return isArray(args2) ? resultSelector.apply(void 0, args2) : resultSelector(args2);
        }));
      };
    }
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var params = {
      subject: void 0,
      args,
      callbackFunc,
      scheduler,
      context: this
    };
    return new Observable(function(subscriber) {
      var context = params.context;
      var subject = params.subject;
      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new AsyncSubject();
          var handler = function() {
            var innerArgs = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              innerArgs[_i2] = arguments[_i2];
            }
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
              return;
            }
            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };
          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (canReportError(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch3, 0, { params, subscriber, context });
      }
    });
  };
}
function dispatch3(state) {
  var _this = this;
  var params = state.params, subscriber = state.subscriber, context = state.context;
  var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
  var subject = params.subject;
  if (!subject) {
    subject = params.subject = new AsyncSubject();
    var handler = function() {
      var innerArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }
      var err = innerArgs.shift();
      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
        _this.add(scheduler.schedule(dispatchNext2, 0, { value, subject }));
      }
    };
    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, { err, subject }));
    }
  }
  this.add(subject.subscribe(subscriber));
}
function dispatchNext2(arg) {
  var value = arg.value, subject = arg.subject;
  subject.next(value);
  subject.complete();
}
function dispatchError(arg) {
  var err = arg.err, subject = arg.subject;
  subject.error(err);
}
var init_bindNodeCallback = __esm({
  "node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js"() {
    init_Observable();
    init_AsyncSubject();
    init_map();
    init_canReportError();
    init_isScheduler();
    init_isArray();
  }
});

// node_modules/rxjs/_esm5/internal/observable/fromEvent.js
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(map(function(args) {
      return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }
  return new Observable(function(subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }
    setupSubscription(target, eventName, handler, subscriber, options);
  });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;
  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);
    unsubscribe = function() {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);
    unsubscribe = function() {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);
    unsubscribe = function() {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError("Invalid event target");
  }
  subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === "function" && typeof sourceObj.removeListener === "function";
}
function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === "function" && typeof sourceObj.off === "function";
}
function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === "function" && typeof sourceObj.removeEventListener === "function";
}
var toString;
var init_fromEvent = __esm({
  "node_modules/rxjs/_esm5/internal/observable/fromEvent.js"() {
    init_Observable();
    init_isArray();
    init_isFunction();
    init_map();
    toString = function() {
      return Object.prototype.toString;
    }();
  }
});

// node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe(map(function(args) {
      return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var e = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }
      return subscriber.next(e.length === 1 ? e[0] : e);
    };
    var retValue;
    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    if (!isFunction(removeHandler)) {
      return void 0;
    }
    return function() {
      return removeHandler(handler, retValue);
    };
  });
}
var init_fromEventPattern = __esm({
  "node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js"() {
    init_Observable();
    init_isArray();
    init_isFunction();
    init_map();
  }
});

// node_modules/rxjs/_esm5/internal/observable/generate.js
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;
  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === void 0 || isScheduler(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }
  return new Observable(function(subscriber) {
    var state = initialState;
    if (scheduler) {
      return scheduler.schedule(dispatch4, 0, {
        subscriber,
        iterate,
        condition,
        resultSelector,
        state
      });
    }
    do {
      if (condition) {
        var conditionResult = void 0;
        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return void 0;
        }
        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }
      var value = void 0;
      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return void 0;
      }
      subscriber.next(value);
      if (subscriber.closed) {
        break;
      }
      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return void 0;
      }
    } while (true);
    return void 0;
  });
}
function dispatch4(state) {
  var subscriber = state.subscriber, condition = state.condition;
  if (subscriber.closed) {
    return void 0;
  }
  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
  } else {
    state.needIterate = true;
  }
  if (condition) {
    var conditionResult = void 0;
    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    if (!conditionResult) {
      subscriber.complete();
      return void 0;
    }
    if (subscriber.closed) {
      return void 0;
    }
  }
  var value;
  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return void 0;
  }
  if (subscriber.closed) {
    return void 0;
  }
  subscriber.next(value);
  if (subscriber.closed) {
    return void 0;
  }
  return this.schedule(state);
}
var init_generate = __esm({
  "node_modules/rxjs/_esm5/internal/observable/generate.js"() {
    init_Observable();
    init_identity();
    init_isScheduler();
  }
});

// node_modules/rxjs/_esm5/internal/observable/iif.js
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = EMPTY;
  }
  if (falseResult === void 0) {
    falseResult = EMPTY;
  }
  return defer(function() {
    return condition() ? trueResult : falseResult;
  });
}
var init_iif = __esm({
  "node_modules/rxjs/_esm5/internal/observable/iif.js"() {
    init_defer();
    init_empty();
  }
});

// node_modules/rxjs/_esm5/internal/util/isNumeric.js
function isNumeric(val) {
  return !isArray(val) && val - parseFloat(val) + 1 >= 0;
}
var init_isNumeric = __esm({
  "node_modules/rxjs/_esm5/internal/util/isNumeric.js"() {
    init_isArray();
  }
});

// node_modules/rxjs/_esm5/internal/observable/interval.js
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  if (!isNumeric(period) || period < 0) {
    period = 0;
  }
  if (!scheduler || typeof scheduler.schedule !== "function") {
    scheduler = async;
  }
  return new Observable(function(subscriber) {
    subscriber.add(scheduler.schedule(dispatch5, period, { subscriber, counter: 0, period }));
    return subscriber;
  });
}
function dispatch5(state) {
  var subscriber = state.subscriber, counter = state.counter, period = state.period;
  subscriber.next(counter);
  this.schedule({ subscriber, counter: counter + 1, period }, period);
}
var init_interval = __esm({
  "node_modules/rxjs/_esm5/internal/observable/interval.js"() {
    init_Observable();
    init_async();
    init_isNumeric();
  }
});

// node_modules/rxjs/_esm5/internal/observable/never.js
function never() {
  return NEVER;
}
var NEVER;
var init_never = __esm({
  "node_modules/rxjs/_esm5/internal/observable/never.js"() {
    init_Observable();
    init_noop();
    NEVER = new Observable(noop);
  }
});

// node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js
function onErrorResumeNext() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  if (sources.length === 0) {
    return EMPTY;
  }
  var first = sources[0], remainder = sources.slice(1);
  if (sources.length === 1 && isArray(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }
  return new Observable(function(subscriber) {
    var subNext = function() {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };
    return from(first).subscribe({
      next: function(value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
var init_onErrorResumeNext = __esm({
  "node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js"() {
    init_Observable();
    init_from();
    init_isArray();
    init_empty();
  }
});

// node_modules/rxjs/_esm5/internal/observable/pairs.js
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new Observable(function(subscriber) {
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];
        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }
      subscriber.complete();
    });
  } else {
    return new Observable(function(subscriber) {
      var keys = Object.keys(obj);
      var subscription = new Subscription();
      subscription.add(scheduler.schedule(dispatch6, 0, { keys, index: 0, subscriber, subscription, obj }));
      return subscription;
    });
  }
}
function dispatch6(state) {
  var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({ keys, index: index + 1, subscriber, subscription, obj }));
    } else {
      subscriber.complete();
    }
  }
}
var init_pairs = __esm({
  "node_modules/rxjs/_esm5/internal/observable/pairs.js"() {
    init_Observable();
    init_Subscription();
  }
});

// node_modules/rxjs/_esm5/internal/util/not.js
function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }
  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}
var init_not = __esm({
  "node_modules/rxjs/_esm5/internal/util/not.js"() {
  }
});

// node_modules/rxjs/_esm5/internal/observable/partition.js
function partition(source, predicate, thisArg) {
  return [
    filter(predicate, thisArg)(new Observable(subscribeTo(source))),
    filter(not(predicate, thisArg))(new Observable(subscribeTo(source)))
  ];
}
var init_partition = __esm({
  "node_modules/rxjs/_esm5/internal/observable/partition.js"() {
    init_not();
    init_subscribeTo();
    init_filter();
    init_Observable();
  }
});

// node_modules/rxjs/_esm5/internal/observable/race.js
function race() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  if (observables.length === 1) {
    if (isArray(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }
  return fromArray(observables, void 0).lift(new RaceOperator());
}
var RaceOperator, RaceSubscriber;
var init_race = __esm({
  "node_modules/rxjs/_esm5/internal/observable/race.js"() {
    init_tslib_es6();
    init_isArray();
    init_fromArray();
    init_OuterSubscriber();
    init_subscribeToResult();
    RaceOperator = function() {
      function RaceOperator2() {
      }
      RaceOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
      };
      return RaceOperator2;
    }();
    RaceSubscriber = function(_super) {
      __extends(RaceSubscriber2, _super);
      function RaceSubscriber2(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
      }
      RaceSubscriber2.prototype._next = function(observable2) {
        this.observables.push(observable2);
      };
      RaceSubscriber2.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
          this.destination.complete();
        } else {
          for (var i = 0; i < len && !this.hasFirst; i++) {
            var observable2 = observables[i];
            var subscription = subscribeToResult(this, observable2, void 0, i);
            if (this.subscriptions) {
              this.subscriptions.push(subscription);
            }
            this.add(subscription);
          }
          this.observables = null;
        }
      };
      RaceSubscriber2.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
          this.hasFirst = true;
          for (var i = 0; i < this.subscriptions.length; i++) {
            if (i !== outerIndex) {
              var subscription = this.subscriptions[i];
              subscription.unsubscribe();
              this.remove(subscription);
            }
          }
          this.subscriptions = null;
        }
        this.destination.next(innerValue);
      };
      return RaceSubscriber2;
    }(OuterSubscriber);
  }
});

// node_modules/rxjs/_esm5/internal/observable/range.js
function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }
  return new Observable(function(subscriber) {
    if (count === void 0) {
      count = start;
      start = 0;
    }
    var index = 0;
    var current = start;
    if (scheduler) {
      return scheduler.schedule(dispatch7, 0, {
        index,
        count,
        start,
        subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }
        subscriber.next(current++);
        if (subscriber.closed) {
          break;
        }
      } while (true);
    }
    return void 0;
  });
}
function dispatch7(state) {
  var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
  if (index >= count) {
    subscriber.complete();
    return;
  }
  subscriber.next(start);
  if (subscriber.closed) {
    return;
  }
  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
var init_range = __esm({
  "node_modules/rxjs/_esm5/internal/observable/range.js"() {
    init_Observable();
  }
});

// node_modules/rxjs/_esm5/internal/observable/timer.js
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  var period = -1;
  if (isNumeric(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if (isScheduler(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }
  if (!isScheduler(scheduler)) {
    scheduler = async;
  }
  return new Observable(function(subscriber) {
    var due = isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch8, due, {
      index: 0,
      period,
      subscriber
    });
  });
}
function dispatch8(state) {
  var index = state.index, period = state.period, subscriber = state.subscriber;
  subscriber.next(index);
  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }
  state.index = index + 1;
  this.schedule(state, period);
}
var init_timer = __esm({
  "node_modules/rxjs/_esm5/internal/observable/timer.js"() {
    init_Observable();
    init_async();
    init_isNumeric();
    init_isScheduler();
  }
});

// node_modules/rxjs/_esm5/internal/observable/using.js
function using(resourceFactory, observableFactory) {
  return new Observable(function(subscriber) {
    var resource;
    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var result;
    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return void 0;
    }
    var source = result ? from(result) : EMPTY;
    var subscription = source.subscribe(subscriber);
    return function() {
      subscription.unsubscribe();
      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
var init_using = __esm({
  "node_modules/rxjs/_esm5/internal/observable/using.js"() {
    init_Observable();
    init_from();
    init_empty();
  }
});

// node_modules/rxjs/_esm5/internal/observable/zip.js
function zip() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }
  var resultSelector = observables[observables.length - 1];
  if (typeof resultSelector === "function") {
    observables.pop();
  }
  return fromArray(observables, void 0).lift(new ZipOperator(resultSelector));
}
var ZipOperator, ZipSubscriber, StaticIterator, StaticArrayIterator, ZipBufferIterator;
var init_zip = __esm({
  "node_modules/rxjs/_esm5/internal/observable/zip.js"() {
    init_tslib_es6();
    init_fromArray();
    init_isArray();
    init_Subscriber();
    init_iterator();
    init_innerSubscribe();
    ZipOperator = function() {
      function ZipOperator2(resultSelector) {
        this.resultSelector = resultSelector;
      }
      ZipOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
      };
      return ZipOperator2;
    }();
    ZipSubscriber = function(_super) {
      __extends(ZipSubscriber2, _super);
      function ZipSubscriber2(destination, resultSelector, values) {
        if (values === void 0) {
          values = /* @__PURE__ */ Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = typeof resultSelector === "function" ? resultSelector : void 0;
        return _this;
      }
      ZipSubscriber2.prototype._next = function(value) {
        var iterators = this.iterators;
        if (isArray(value)) {
          iterators.push(new StaticArrayIterator(value));
        } else if (typeof value[iterator] === "function") {
          iterators.push(new StaticIterator(value[iterator]()));
        } else {
          iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
      };
      ZipSubscriber2.prototype._complete = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
          this.destination.complete();
          return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
          var iterator2 = iterators[i];
          if (iterator2.stillUnsubscribed) {
            var destination = this.destination;
            destination.add(iterator2.subscribe());
          } else {
            this.active--;
          }
        }
      };
      ZipSubscriber2.prototype.notifyInactive = function() {
        this.active--;
        if (this.active === 0) {
          this.destination.complete();
        }
      };
      ZipSubscriber2.prototype.checkIterators = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
          var iterator2 = iterators[i];
          if (typeof iterator2.hasValue === "function" && !iterator2.hasValue()) {
            return;
          }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
          var iterator2 = iterators[i];
          var result = iterator2.next();
          if (iterator2.hasCompleted()) {
            shouldComplete = true;
          }
          if (result.done) {
            destination.complete();
            return;
          }
          args.push(result.value);
        }
        if (this.resultSelector) {
          this._tryresultSelector(args);
        } else {
          destination.next(args);
        }
        if (shouldComplete) {
          destination.complete();
        }
      };
      ZipSubscriber2.prototype._tryresultSelector = function(args) {
        var result;
        try {
          result = this.resultSelector.apply(this, args);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return ZipSubscriber2;
    }(Subscriber);
    StaticIterator = function() {
      function StaticIterator2(iterator2) {
        this.iterator = iterator2;
        this.nextResult = iterator2.next();
      }
      StaticIterator2.prototype.hasValue = function() {
        return true;
      };
      StaticIterator2.prototype.next = function() {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
      };
      StaticIterator2.prototype.hasCompleted = function() {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
      };
      return StaticIterator2;
    }();
    StaticArrayIterator = function() {
      function StaticArrayIterator2(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
      }
      StaticArrayIterator2.prototype[iterator] = function() {
        return this;
      };
      StaticArrayIterator2.prototype.next = function(value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
      };
      StaticArrayIterator2.prototype.hasValue = function() {
        return this.array.length > this.index;
      };
      StaticArrayIterator2.prototype.hasCompleted = function() {
        return this.array.length === this.index;
      };
      return StaticArrayIterator2;
    }();
    ZipBufferIterator = function(_super) {
      __extends(ZipBufferIterator2, _super);
      function ZipBufferIterator2(destination, parent, observable2) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable2;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
      }
      ZipBufferIterator2.prototype[iterator] = function() {
        return this;
      };
      ZipBufferIterator2.prototype.next = function() {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
          return { value: null, done: true };
        } else {
          return { value: buffer.shift(), done: false };
        }
      };
      ZipBufferIterator2.prototype.hasValue = function() {
        return this.buffer.length > 0;
      };
      ZipBufferIterator2.prototype.hasCompleted = function() {
        return this.buffer.length === 0 && this.isComplete;
      };
      ZipBufferIterator2.prototype.notifyComplete = function() {
        if (this.buffer.length > 0) {
          this.isComplete = true;
          this.parent.notifyInactive();
        } else {
          this.destination.complete();
        }
      };
      ZipBufferIterator2.prototype.notifyNext = function(innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
      };
      ZipBufferIterator2.prototype.subscribe = function() {
        return innerSubscribe(this.observable, new SimpleInnerSubscriber(this));
      };
      return ZipBufferIterator2;
    }(SimpleOuterSubscriber);
  }
});

// node_modules/rxjs/_esm5/index.js
var esm5_exports = {};
__export(esm5_exports, {
  ArgumentOutOfRangeError: () => ArgumentOutOfRangeError,
  AsyncSubject: () => AsyncSubject,
  BehaviorSubject: () => BehaviorSubject,
  ConnectableObservable: () => ConnectableObservable,
  EMPTY: () => EMPTY,
  EmptyError: () => EmptyError,
  GroupedObservable: () => GroupedObservable,
  NEVER: () => NEVER,
  Notification: () => Notification,
  NotificationKind: () => NotificationKind,
  ObjectUnsubscribedError: () => ObjectUnsubscribedError,
  Observable: () => Observable,
  ReplaySubject: () => ReplaySubject,
  Scheduler: () => Scheduler,
  Subject: () => Subject,
  Subscriber: () => Subscriber,
  Subscription: () => Subscription,
  TimeoutError: () => TimeoutError,
  UnsubscriptionError: () => UnsubscriptionError,
  VirtualAction: () => VirtualAction,
  VirtualTimeScheduler: () => VirtualTimeScheduler,
  animationFrame: () => animationFrame,
  animationFrameScheduler: () => animationFrameScheduler,
  asap: () => asap,
  asapScheduler: () => asapScheduler,
  async: () => async,
  asyncScheduler: () => asyncScheduler,
  bindCallback: () => bindCallback,
  bindNodeCallback: () => bindNodeCallback,
  combineLatest: () => combineLatest,
  concat: () => concat,
  config: () => config,
  defer: () => defer,
  empty: () => empty2,
  forkJoin: () => forkJoin,
  from: () => from,
  fromEvent: () => fromEvent,
  fromEventPattern: () => fromEventPattern,
  generate: () => generate,
  identity: () => identity,
  iif: () => iif,
  interval: () => interval,
  isObservable: () => isObservable,
  merge: () => merge,
  never: () => never,
  noop: () => noop,
  observable: () => observable,
  of: () => of,
  onErrorResumeNext: () => onErrorResumeNext,
  pairs: () => pairs,
  partition: () => partition,
  pipe: () => pipe,
  queue: () => queue,
  queueScheduler: () => queueScheduler,
  race: () => race,
  range: () => range,
  scheduled: () => scheduled,
  throwError: () => throwError,
  timer: () => timer,
  using: () => using,
  zip: () => zip
});
var init_esm5 = __esm({
  "node_modules/rxjs/_esm5/index.js"() {
    init_Observable();
    init_ConnectableObservable();
    init_groupBy();
    init_observable();
    init_Subject();
    init_BehaviorSubject();
    init_ReplaySubject();
    init_AsyncSubject();
    init_asap();
    init_async();
    init_queue();
    init_animationFrame();
    init_VirtualTimeScheduler();
    init_Scheduler();
    init_Subscription();
    init_Subscriber();
    init_Notification();
    init_pipe();
    init_noop();
    init_identity();
    init_isObservable();
    init_ArgumentOutOfRangeError();
    init_EmptyError();
    init_ObjectUnsubscribedError();
    init_UnsubscriptionError();
    init_TimeoutError();
    init_bindCallback();
    init_bindNodeCallback();
    init_combineLatest();
    init_concat();
    init_defer();
    init_empty();
    init_forkJoin();
    init_from();
    init_fromEvent();
    init_fromEventPattern();
    init_generate();
    init_iif();
    init_interval();
    init_merge();
    init_never();
    init_of();
    init_onErrorResumeNext();
    init_pairs();
    init_partition();
    init_race();
    init_range();
    init_throwError();
    init_timer();
    init_using();
    init_zip();
    init_scheduled();
    init_empty();
    init_never();
    init_config();
  }
});

export {
  __spreadValues,
  __spreadProps,
  __objRest,
  __commonJS,
  __toCommonJS,
  __async,
  __extends,
  init_tslib_es6,
  isFunction,
  init_isFunction,
  init_isArray,
  Subscription,
  init_Subscription,
  Subscriber,
  init_Subscriber,
  identity,
  init_identity,
  pipe,
  init_pipe,
  Observable,
  init_Observable,
  Subject,
  init_Subject,
  refCount,
  init_refCount,
  ConnectableObservable,
  connectableObservableDescriptor,
  init_ConnectableObservable,
  init_groupBy,
  BehaviorSubject,
  init_BehaviorSubject,
  EMPTY,
  empty2 as empty,
  init_empty,
  isScheduler,
  init_isScheduler,
  of,
  init_of,
  throwError,
  init_throwError,
  Notification,
  init_Notification,
  init_observeOn,
  init_ReplaySubject,
  init_AsyncSubject,
  asap,
  init_asap,
  init_async,
  noop,
  init_noop,
  isObservable,
  ArgumentOutOfRangeError,
  init_ArgumentOutOfRangeError,
  EmptyError,
  init_EmptyError,
  init_TimeoutError,
  map,
  init_map,
  OuterSubscriber,
  init_OuterSubscriber,
  subscribeToResult,
  init_subscribeToResult,
  combineLatest,
  init_combineLatest,
  from,
  init_from,
  SimpleInnerSubscriber,
  SimpleOuterSubscriber,
  innerSubscribe,
  init_innerSubscribe,
  mergeMap,
  init_mergeMap,
  mergeAll,
  init_mergeAll,
  init_concatAll,
  concat,
  init_concat,
  defer,
  init_defer,
  forkJoin,
  isNumeric,
  init_isNumeric,
  merge,
  init_merge,
  init_not,
  filter,
  init_filter,
  init_race,
  init_timer,
  init_zip,
  esm5_exports,
  init_esm5
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-5DVKFXPK.js.map
