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
        stage('missing dependencies'){
            steps{
                sh ('apk add make nasm autoconf automake libtool dpkg pkgconfig libpng libpng-dev g++')
            }
        }
        stage('dependencies'){
            steps{
                sh ('npm install')
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