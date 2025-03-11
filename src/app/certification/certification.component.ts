import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certifications = [
    { name: 'Java Certification', link: 'assets/Certificate/Java%20Certificate%20IIT%20Bomabay%20Spoken%20tutorial.pdf' },
    { name: 'C Certification', link: 'assets/Certificate/SHUBHAM-BONDE-Complition%20OF%20C-Certificate%20.pdf' },
    { name: 'Cpp Certification', link: 'assets/Certificate/SHUBHAM-BONDE-Cpp%20-Certificate%20.pdf' },
    { name: 'Soft-Skills Certification', link: 'assets/Certificate/Shubham%20Prakash%20Bonde%20Soft%20Skill%20Certificate%20A.Y.%202021-22.pdf' },
    { name: 'eCertificate_Oracle_Cloud', link: 'assets/Certificate/eCertificate_page-0001.pdf' }
  ];
  constructor() { 
    
  }
  

  ngOnInit() {
  }

}