install:
	npm-install

start-calc:
	npx babel-node 'src/bin/brain-calc.js'

start-even:
	npx babel-node 'src/bin/brain-even.js'

start-nod:
	npx babel-node 'src/bin/brain-gcd.js'

start-p:
	npx babel-node 'src/bin/brain-progression.js'

start-prime:
	npx babel-node 'src/bin/brain-prime.js'
	
publish:
	npm publish

lint:
	npx eslint .