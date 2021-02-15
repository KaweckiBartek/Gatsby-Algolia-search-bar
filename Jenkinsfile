pipeline {
    agent {
        docker { image 'cypress/browsers:chrome67' }
    }
    stages {
        stage('Test') {
            steps {
                sh ('node --version')
            }
        }
        stage('dependencies'){
            steps{
                sh(' apt-get update')
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