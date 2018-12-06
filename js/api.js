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

function save(id, collection) {
    var docRef = db.collection(collection).doc(id);

}