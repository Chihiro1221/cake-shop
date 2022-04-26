export default class {
  constructor(config) {
    this.baseUrl = config.baseUrl
  }

  request(url, method = "GET", data) {
    uni.showLoading({
      title: '加载中'
    });
    return new Promise((resolve, reject) => {
      uni.request({
        url: `${this.baseUrl}${url}`,
        method,
        header: {
          'X-LC-Id': 'KGjYm7Q7JgBFi6vO4cQ6tT2q-gzGzoHsz',
          'X-LC-Key': '3hem7Os3TN6OVuhVQ3DF6lpg'
        },
        data,
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        },
        complete() {
          setTimeout(() => uni.hideLoading(), 300)
        }
      });
    })
  }

  get(url) {
    return this.request(url)
  }
  post(url, data) {
    return this.request(url, "POST", data)
  }
}
