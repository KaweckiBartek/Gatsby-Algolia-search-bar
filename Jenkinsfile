pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
        environment {
            GATSBY_ALGOLIA_APP_ID= 4A8W4Y8R53
            GATSBY_ALGOLIA_SEARCH_KEY= 46380d557f1cd9dff4ddf9350f0eab2e
            ALGOLIA_ADMIN_KEY=191ca7f8c18b8746d79d1b274a7c2683
        }
    stages {
        stage('Test') {
            steps {
                sh ('node --version')
                sh('apk --no-cache add shadow gcc musl-dev autoconf automake make libtool nasm tiff jpeg zlib zlib-dev file pkgconf')
            }
        }
        stage('dependencies'){
            steps{
                sh ('npm install')
            }
        }
        stage('gatsby cli'){
            steps{
                sh ('npm install -g gatsby-cli')
            }
        }
        stage('build'){
            steps{
                sh ('gatsby build')
            }
        }
    }
}