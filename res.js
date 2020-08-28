`use strict`

exports.success = (values, res) => {
    let data = {
        code: 200,
        status: 'success',
        data: values
    }
    res.json(data)
    res.end()
}

exports.error = (err, res) => {
    let data = {
        code: err.code || 500,
        status: 'failed',
        errors: err.message || err
    }
    res.json(data)
    res.end()
}