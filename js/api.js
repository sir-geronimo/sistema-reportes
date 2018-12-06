function getAll(collection) {
    db.collection(collection).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.error(error);
    });
}

function getById(id, collection) {
    var docRef = db.collection(collection).doc(id);

    docRef.get().then(function(doc){
        if(doc.exists) {
            console.log(doc.data());
        } else {
            console.error("No exist")
        }
    }).catch(function(error) {
        console.error(error);
    });
}

function save(id, data) {
    
    // Tobe continued
    if (id === null) {
        return add(data);    
    } else {
        return update(id, data);
    }
}

function add(data) {
    db.collection(data['collection']).add({
        date: data['date'],
        description: data['description'],
        location: new firebase.firestore.GeoPoint(data['latitude'], data['longitude']),
        userId: request.auth.uid
    });

    return "Done add"
}

function update(id, data) {
    console.log(id, data);
    return "Done update"
}