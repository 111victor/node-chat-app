const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;


	beforeEach(() => {
		users = new Users();
		users.users =[{
			id:'1',
			name: 'Mike',
			room: 'Node'
		},{
			id:'2',
			name: 'Jen',
			room: 'Node'
		},{
			id:'3',
			name: 'Frank',
			room: 'Node'
		}];
	});

	it('should remove a user', ()=> {
		var userId = '1';
		var user = users.removeUser(userId);
		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should get a user', ()=> {
		var user = users.getUser('1');
		expect(user.id).toEqual('1');
	});



	it('should add new users', ()=> {
		var users = new Users();
		var user = {
			id: '123',
			name: 'vic',
			room: 'Office'
		}
		var resUser = users.addUser(user.id, user.name, user.room);
		expect(users.users).toEqual([user]);
	});

	it('should return names for node course', ()=> {
		var userList = users.getUserList('Node');
		expect(userList).toEqual(['Mike', 'Jen','Frank']);
	});

});