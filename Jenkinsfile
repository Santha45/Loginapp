pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Santha45/Loginapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("login-app")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker rm -f login-app || true'
                    dockerImage.run("-d -p 3000:3000 --name login-app")
                }
            }
        }
    }
}
