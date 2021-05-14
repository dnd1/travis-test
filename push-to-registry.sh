
echo "push to registry"
REPO_NAME="travis-test"
IMAGE_TAG="latest"

REPO_URL="208369778572.dkr.ecr.us-east-1.amazonaws.com"

# IMPORTANT
# In order to login to our ECR repo, the following env vars have to be set
# in travis repo settings:
# AWS_ACCESS_KEY_ID
# AWS_SECRET_ACCESS_KEY
echo "logging in to ecr and docker"
aws ecr get-login-password --region us-east-1| docker login --username AWS --password-stdin $REPO_URL

# # this builds, tags and pushes the branch/tag.
echo "running docker build"
docker build -t ${REPO_NAME} . 
docker tag "${REPO_NAME}:latest" "${REPO_URL}/${REPO_NAME}:${IMAGE_TAG}"
docker push "${REPO_URL}/${REPO_NAME}:${IMAGE_TAG}"