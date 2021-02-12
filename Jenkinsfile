pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('build'){
            steps{
                sh 'npm install',
                sh 'npm install -g gatsby-cli',
                sh 'gatsby build'
            }
        }
    }
}