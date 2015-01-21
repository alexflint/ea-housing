s3cmd sync . s3://eahousing/ --delete-removed --exclude=.git/* --exclude=.gitignore --exclude=scripts
