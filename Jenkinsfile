pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
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
