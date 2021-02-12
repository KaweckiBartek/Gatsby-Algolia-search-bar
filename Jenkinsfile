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
                sh ('npm install'),
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