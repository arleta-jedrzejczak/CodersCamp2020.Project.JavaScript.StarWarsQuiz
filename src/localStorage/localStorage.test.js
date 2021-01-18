import localStorage from './localStorage';


test('Testing adding score to score tab', () =>{
    let obj = {
        player: "test",
        answered: "3/5"
    }    
    const local = new localStorage();

    expect(
        local.save(obj)
    ).toEqual(
        [
            {
                player: "test",
                answered: "3/5"
            }
        ]
    );
});

test('Testing wrong value type for answered', () => {
    let obj = {
        player: "test",
        answered: 3/5
    }  

    const local = new localStorage();
    local.Storage.removeItem('Score');

    expect( () => {
        local.save(obj)
    }).toThrow('Answered is not a string');
});

test('Testing wrong value type for player', () => {
    let obj = {
        player: 1,
        answered: "3/5"
    }  

    const local = new localStorage();
    local.Storage.removeItem('Score');

    expect( () => {
        local.save(obj)
    }).toThrow('Player is not a string');
});

test('Testing empty object', () => {
    let obj = {}  

    const local = new localStorage();
    local.Storage.removeItem('Score');

    expect( () => {
        local.save(obj)
    }).toThrow('Object is empty!');
});

test('Testing save and read 3 objects', () => {
    let obj1 = {
        player: "test1",
        answered: "3/5"
    }  

    let obj2 = {
        player: "test2",
        answered: "2/5"
    }

    let obj3 = {
        player: "test3",
        answered: "5/20"
    }

    const local = new localStorage();
    local.Storage.removeItem('Score');
    local.save(obj1);
    local.save(obj2);
    local.save(obj3);
    expect(
        local.getScore()
    ).toEqual(
        [
            {
                player: "test3",
                answered: "5/20" 
            }
            ,
            {
                player: "test1",
                answered: "3/5"
            }
            ,
            {
                player: "test2",
                answered: "2/5"
            }
        ]
    );
});

test('Testing save more then 3 and read 3 highest score objects', () => {
    let obj1 = {
        player: "test1",
        answered: "3/5"
    }  

    let obj2 = {
        player: "test2",
        answered: "2/5"
    }

    let obj3 = {
        player: "test3",
        answered: "5/20"
    }

    let obj4 = {
        player: "test4",
        answered: "3/20"
    }

    let obj5 = {
        player: "test5",
        answered: "1/48"
    }

    const local = new localStorage();
    local.Storage.removeItem('Score');
    local.save(obj1);
    local.save(obj2);
    local.save(obj3);
    local.save(obj4);
    local.save(obj5);
    expect(
        local.getScore()
    ).toEqual(
        [
            {
                player: "test3",
                answered: "5/20" 
            }
            ,
            {
                player: "test1",
                answered: "3/5"
            }
            ,
            {
                player: "test4",
                answered: "3/20"
            }
        ]
    );
});

test('Testing empty score tab read', () => {

    const local = new localStorage();
    local.Storage.removeItem('Score');

    expect( () => {
        local.getScore()
    }).toThrow('No scores was saved!');
});