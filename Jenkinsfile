pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Code') {
      steps {
        git 'https://github.com/jesmesjugger/ussd_heroku_poc.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
