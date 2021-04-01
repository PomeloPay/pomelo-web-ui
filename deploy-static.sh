#!/usr/bin/env bash
set -ex
AWS_S3_BUCKET_NAME=pomelopay-web-ui
aws s3 rm "s3://${AWS_S3_BUCKET_NAME}/" --recursive

aws s3 cp public \
    "s3://${AWS_S3_BUCKET_NAME}" \
    --recursive \
    --metadata-directive REPLACE \
    --acl public-read \
    --region "${AWS_REGION}"
