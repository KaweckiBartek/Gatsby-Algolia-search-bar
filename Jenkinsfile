pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh ('node --version')
            }
        }
        stage('dependencies'){
            steps{
                sh('apk --no-cache add shadow gcc musl-dev autoconf automake make libtool nasm tiff jpeg zlib zlib-dev file pkgconf xvfb')
                sh ('npm install')
            }
        }
        stage('gatsby cli'){
            steps{
                sh ('npm install -g gatsby-cli')
            }
        }
        stage('test:e2e'){
            steps{
                sh ('npm run test:e2e:ci')
            }
        }
    }
}