const authorize = (req ,res , next) => {
    const {user} = req.query
    if(user === 'ayan'){
        req.user = {name: 'ayan', id: 1}
        next()
    }else{
        console.log('Unauthorize')
        res.status(401).send('Unathurized')
        next()
    }
}

module.exports = authorize