docker build -t model .
docker run --rm -v $(pwd)/local_test/test_dir:/opt/ml model train
docker run --rm -p 127.0.0.1:8080:8080 -v $(pwd)/local_test/test_dir:/opt/ml model serve

