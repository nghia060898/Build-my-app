const testAPI = function () {
    return {
        test: (req, res) => {
            return res.json({ s: 200, msg: "Test API Success" })
        }
    }
}


module.exports = testAPI();