function getAll(collection) {
    var docs = [];
    db.collection(collection).get().then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
            docs.push(doc.data());
        })
    })
    .catch(function(error) {
        console.error(error);
    });
    return docs;
}

function getById(id, collection) {
    var docRef = db.collection(collection).doc(id);

    var docs = []
    docRef.get().then(function(doc){
        if(doc.exists) {
            docs.push(doc.data());
        } else {
            console.error("No exists")
        }
    }).catch(function(error) {
        console.error(error);
    });

    return docs;
}

function saveReport(data, id) {
    
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

function updateReport(data, id) {
    var docRef = db.collection(data['collection']).doc(id);

    docRef.set({
        date: data['date'],
        description: data['description'],
        location: new firebase.firestore.GeoPoint(data['latitude'], data['longitude']),
        userId: "wySJyZe5P2XzFCYb7rxs"
    });
    return "Done update"
}

function getMarkers() {
    var markers = [];
    db.collection("reports").get().then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
            markers.push(doc.data());
        });
        var jsonMarkers = JSON.stringify(markers);
        console.log(jsonMarkers);
    })
    .catch(function(error) {
        console.error(error);
    });
    
    return markers;
    
}

function registerUser(data) {

}