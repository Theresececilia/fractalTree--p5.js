let tree = [];
let leaves = [];
let count = 0;

function setup() {
	const width = windowWidth
    const height = windowHeight
	
	createCanvas(width, height);
	background(13, 12, 15);
    
	let a = createVector(width/2, height)
    let b = createVector(width/2, height-250)
	let root = new Branch(a,b)

    tree[0] = root;
}

function mousePressed() {
      for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
        tree.push(tree[i].branchA())
        tree.push(tree[i].branchB())
        }
        tree[i].finished = true
    }
    count++;

    if (count === 7) {
        for (var i = 0; i < tree.length; i++) {
            if (!tree[i].finished) {
                let leaf = tree[i].end.copy();
                leaves.push(leaf)
            }
        }
    }
}

function draw() {

    for (var i = 0; i < tree.length; i++) {
        tree[i].show()
    }

    
    for (var i = 0; i < leaves.length; i++) {
        ran = random(0, 150)
        fill(ran, 0, 223, ran)
        noStroke()
        ellipse(leaves[i].x, leaves[i].y, 3, 8)
        leaves[i].y += random(0, 1)
        leaves[i].x += random(-0.5, 0.5)
    }
}

