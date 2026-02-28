import {usersList} from '../model/mvcUserModel.js';

export  function handleUsers (req, res) {

    const usersData = usersList();

    console.log(usersData)

    res.render('mvcUsers', {users:usersData})
}