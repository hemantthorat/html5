self.postMessage("Thread Ready..");
self.addEventListener('message', function(event) {
    self.postMessage("Worker started calculating..."); 	
    var total = 0;
    for (var i = 0; i < 100000; i++) {
        for (var k = 0; k < 30000; k++) {
            total++;
        }
    }
    self.postMessage(total);
}, false);
