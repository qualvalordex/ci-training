async function hello() {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Hello world!",
            }
        ),
    };
}

module.exports = { hello };