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

function saveReport(data, id) {
    
    // Tobe continued
    if (id == null) {
        return addReport(data);    
    } else {
        return updateReport(id, data);
    }
}

function addReport(data) {
    db.collection(data['collection']).add({
        date: data['date'],
        description: data['description'],
        location: new firebase.firestore.GeoPoint(data['latitude'], data['longitude']),
        userId: "wySJyZe5P2XzFCYb7rxs"
    });

    return "Done add"
}

function updateReport(id, data) {
    var docRef = db.collection(data['collection']).doc(id);

    docRef.set({
        date: data['date'],
        description: data['description'],
        location: new firebase.firestore.GeoPoint(data['latitude'], data['longitude']),
        userId: "wySJyZe5P2XzFCYb7rxs"
    });
    return "Done update"
}