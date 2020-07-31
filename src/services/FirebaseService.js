import {firebaseDatabase} from '../utils/firebaseUtils'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);

        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static getDataListWhere = (nodePath, key, value, callback, size = 10,) => {
        let query = firebaseDatabase.ref(nodePath).limitToLast(size).orderByChild(key).equalTo(value);

        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    }

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        ref.set(objToSubmit);
        return objToSubmit;
    };

    static remove = (node, key) => {
        return firebaseDatabase.ref(node + '/' + key).remove();
    };
}