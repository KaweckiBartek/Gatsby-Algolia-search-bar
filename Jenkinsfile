pipeline {
    agent {
        docker { image 'rbecheras/ubuntu-node' }
    }
    stages {
        stage('Test') {
            steps {
                sh ('node --version')
            }
        }
        stage('dependencies'){
            steps{
                sh('apt-get update && apt-get install shadow gcc musl-dev autoconf automake make libtool nasm tiff jpeg zlib zlib-dev file pkgconf xvfb')
                sh ('npm ci')
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
        stage('cleanup'){
            steps{
                sh('apt-get clean')
            }
        }
    }
}