echo "Switching to master branch"
git checkout master

echo "Building app..."
npm run build

echo "Deploying to server..."
scp -r build/* root@144.126.208.108:/var/www/144.126.208.108/

echo "Done!"
