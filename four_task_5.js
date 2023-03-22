(function (){
    function showUser(id) {
        if (id < 0) {
            throw new Error('ID must not be negative: ' + id);
        }
        return { id };
    }

    function showUsers(ids){
        const validIds = [];
        for(let i = 0; i < ids.length; i++){
            try{
                const user = showUser(ids[i]);
                validIds.push(user)
            }catch (e) {
                console.log(`${e.name} ${e.message}`);
            }
        }
        return validIds;
    }
    console.log(showUsers([7, -12, 44, 22]));
})()