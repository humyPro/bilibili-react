### autorun

用法：autorun(() => { sideEffect }, options) 。autorun 负责运行所提供的 sideEffect 并追踪在 sideEffect 运行期间访问过的 observable 的状态。 将来如果有其中一个已使用的 observable 发生变化，同样的 sideEffect 会再运行一遍。 autorun 返回一个清理函数用来取消副作用。

选项

name?: string: 用于识别和调试的名称
delay?: number: 使副作用延迟和防抖的时间。默认为 0
onError?: (error) => void: 如果 autorun 函数抛出异常，则触发错误处理函数
scheduler?: (callback) => void: 设置自定义调度器以决定如何调度 autorun 函数的重新运行

### when

用法: when(() => condition, () => { sideEffect }, options) 。 condition 表达式会自动响应任何它所使用的 observable。 一旦表达式返回的是真值，副作用函数便会立即调用，但只会调用一次。

注意: 副作用函数 (第二个参数) 其实是可选的。如果不提供副作用函数的话，将返回一个可取消的 promise (即具有 cancle() 方法的 promise)

when 返回清理器以尽早地取消操作。

如果没有给 when 传递副作用函数的话，它将返回一个可以等待条件结束的 promise 。

options

name?: string: 用于识别和调试的名称
onError?: (error) => void: 如果 断言函数 或 副作用函数 函数抛出异常，则触发错误处理函数
timeout: number 以毫秒为单位的延迟，之后将触发 onError 处理函数，以通知在指定时间内未满足条件

### reaction

用法: reaction(() => data, data => { sideEffect }, options). reaction 是 autorun 的变种，在如何追踪 observable 方面给予了更细粒度的控制。 它接收两个函数，第一个是追踪并返回数据，该数据用作第二个函数，也就是副作用的输入。 与 'autorun' 不同的是副作用起初不会运行，并且在执行副作用时访问的任何 observable 都不会被追踪。 和 autorunAsync 一样，副作用是可以进行函数去抖的。

options

fireImmediately?: boolean: 在触发 副作用函数 之前等待变化。默认为 false
delay?: number: 使副作用延迟和防抖的时间。默认为 0
equals. 自定义相等函数来确定 expr 函数是否与之前的结果不同，再决定是否触发副作用。接收与 computed 的 equals 选项相同的选项
还接收 autorun 的所有选项

### onReactionError

用法: onReactionError(handler: (error: any, derivation) => void)

此方法附加一个全局错误监听器，对于从 reaction 抛出的每个错误都会调用该错误监听器。 它可以用来监控或者测试。
