// src/data/projects-data.ts

interface Project {
  title: string;
  techStack: string[];
  description: string;
  link: {
    label: string;
    href: string;
  };
  stars: number;
  forks: number;
  issues: number;
  lastUpdated: string;
  lastCommit: string;
}

export const PROJECTS: Project[] = [
  {
    "title": "AWS Terraform Workshop",
    "techStack": [
      "Terraform",
      "AWS"
    ],
    "description": "Beginner-friendly guide to setting up AWS infrastructure using Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-Terraform-Workshop",
      "href": "https://github.com/NotHarshhaa/AWS-Terraform-Workshop"
    },
    "stars": 7,
    "forks": 12,
    "issues": 0,
    "lastUpdated": "2025-07-01T17:26:55Z",
    "lastCommit": "6fde1dc60646f5e9023c89ed9d87dc4cb27cddfe"
  },
  {
    "title": "ECR to ECS Deployment with GitHub Actions",
    "techStack": [
      "Terraform",
      "ECS",
      "GitHub Actions",
      "Docker"
    ],
    "description": "Automated deployment of a Python application to AWS ECS using GitHub Actions, Docker, and Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy",
      "href": "https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy"
    },
    "stars": 8,
    "forks": 17,
    "issues": 0,
    "lastUpdated": "2025-06-04T10:27:42Z",
    "lastCommit": "76a6209746bbf4c0fa3463bcc89ea9fad47ec9d1"
  },
  {
    "title": "Amazon EKS Cluster with Terraform",
    "techStack": [
      "Terraform",
      "EKS"
    ],
    "description": "Terraform-based provisioning of an Amazon EKS Cluster for Kubernetes deployments.",
    "link": {
      "label": "github.com/NotHarshhaa/eks-cluster-terraform",
      "href": "https://github.com/NotHarshhaa/eks-cluster-terraform"
    },
    "stars": 64,
    "forks": 65,
    "issues": 0,
    "lastUpdated": "2025-07-11T16:53:41Z",
    "lastCommit": "85af1d99301781702234e86fabf16213bbdeddf1"
  },
  {
    "title": "CI/CD on EKS using GitHub Actions",
    "techStack": [
      "CI/CD",
      "EKS",
      "GitHub Actions",
      "Terraform"
    ],
    "description": "CI/CD pipeline for deploying a Node.js app on Amazon EKS using GitHub Actions, Terraform, and Kubernetes.",
    "link": {
      "label": "github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions",
      "href": "https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions"
    },
    "stars": 100,
    "forks": 77,
    "issues": 0,
    "lastUpdated": "2025-07-14T14:21:07Z",
    "lastCommit": "f9f9629b03ee20d09a029f5cd38fa2c7c827a1c7"
  },
  {
    "title": "DevOps Tools Collection",
    "techStack": [
      "DevOps"
    ],
    "description": "Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-tools",
      "href": "https://github.com/NotHarshhaa/devops-tools"
    },
    "stars": 172,
    "forks": 149,
    "issues": 2,
    "lastUpdated": "2025-07-11T16:53:02Z",
    "lastCommit": "79e74472f441a75fbdb5f994b324b02d519244be"
  },
  {
    "title": "Certified Kubernetes Administrator (CKA) Prep",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Master Kubernetes from scratch and prepare for the CKA certification.",
    "link": {
      "label": "github.com/NotHarshhaa/Certified_Kubernetes_Administrator",
      "href": "https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator"
    },
    "stars": 120,
    "forks": 92,
    "issues": 0,
    "lastUpdated": "2025-07-11T16:53:25Z",
    "lastCommit": "7bb781bac8fb9db8c9c17f7ef4ebf7e1d410f9e1"
  },
  {
    "title": "Secure Kubernetes Dashboard",
    "techStack": [
      "Kubernetes",
      "Security"
    ],
    "description": "Kubernetes dashboard with integrated health checks and Trivy scanning.",
    "link": {
      "label": "github.com/NotHarshhaa/kubernetes-dashboard",
      "href": "https://github.com/NotHarshhaa/kubernetes-dashboard"
    },
    "stars": 49,
    "forks": 44,
    "issues": 0,
    "lastUpdated": "2025-07-11T16:54:06Z",
    "lastCommit": "a81343272b9e0ca5acd0143c05b33c30fe2cb456"
  },
  {
    "title": "Real-World DevOps Projects",
    "techStack": [
      "DevOps",
      "Projects"
    ],
    "description": "Real-world DevOps projects from beginner to advanced levels.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Projects",
      "href": "https://github.com/NotHarshhaa/DevOps-Projects"
    },
    "stars": 1977,
    "forks": 2353,
    "issues": 12,
    "lastUpdated": "2025-07-16T08:02:27Z",
    "lastCommit": "4293437b9b0386db1350cb3d41a116c94bdbbc16"
  },
  {
    "title": "Uber Clone with DevSecOps",
    "techStack": [
      "Full-Stack",
      "DevSecOps"
    ],
    "description": "Full-stack Uber-like transportation application with DevSecOps integration.",
    "link": {
      "label": "github.com/NotHarshhaa/uber-clone",
      "href": "https://github.com/NotHarshhaa/uber-clone"
    },
    "stars": 3,
    "forks": 4,
    "issues": 0,
    "lastUpdated": "2025-06-04T17:05:43Z",
    "lastCommit": "d54f10fc513fc2fdd33f92041ae0f9dfaac36c43"
  },
  {
    "title": "Kubernetes Learning Projects",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Practical Kubernetes projects to master deployment, management, and scaling of containerized applications.",
    "link": {
      "label": "github.com/NotHarshhaa/kubernetes-projects-learning",
      "href": "https://github.com/NotHarshhaa/kubernetes-projects-learning"
    },
    "stars": 276,
    "forks": 187,
    "issues": 1,
    "lastUpdated": "2025-07-16T04:34:18Z",
    "lastCommit": "dee8ff4607954972994dedc5689390ffd8ad01b7"
  },
  {
    "title": "Provisioning EKS on AWS with Terraform",
    "techStack": [
      "AWS",
      "EKS",
      "Terraform"
    ],
    "description": "Provision Amazon EKS Cluster on AWS using Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-EKS_Terraform",
      "href": "https://github.com/NotHarshhaa/AWS-EKS_Terraform"
    },
    "stars": 19,
    "forks": 52,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:03:22Z",
    "lastCommit": "bd77ff8270a7ac5c75a126c8a05a4ff2f32e6563"
  },
  {
    "title": "Deploy Super Mario on EKS",
    "techStack": [
      "Kubernetes",
      "Terraform"
    ],
    "description": "Deploy Super Mario game on Amazon EKS using Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform",
      "href": "https://github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform"
    },
    "stars": 9,
    "forks": 19,
    "issues": 0,
    "lastUpdated": "2025-03-17T05:38:10Z",
    "lastCommit": "e174ff110b003113e4e2dbc8153afdd49df38fab"
  },
  {
    "title": "Cloud-Native Monitoring App",
    "techStack": [
      "Python",
      "Docker",
      "EKS"
    ],
    "description": "Monitoring app built with Python, containerized with Docker, and deployed to EKS.",
    "link": {
      "label": "github.com/NotHarshhaa/cloud-native-monitoring-app",
      "href": "https://github.com/NotHarshhaa/cloud-native-monitoring-app"
    },
    "stars": 7,
    "forks": 18,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:04:31Z",
    "lastCommit": "15102a44dc31d8f340e4ae1ca83db337b488c483"
  },
  {
    "title": "Zomato Clone with DevSecOps",
    "techStack": [
      "Full-Stack",
      "DevSecOps"
    ],
    "description": "Full-stack food delivery application inspired by Zomato with DevSecOps integration.",
    "link": {
      "label": "github.com/NotHarshhaa/Zomato-Clone",
      "href": "https://github.com/NotHarshhaa/Zomato-Clone"
    },
    "stars": 8,
    "forks": 55,
    "issues": 0,
    "lastUpdated": "2025-04-17T02:18:29Z",
    "lastCommit": "823466a188d4853ca15308d6194a49d04582b685"
  },
  {
    "title": "Learning Prometheus Monitoring",
    "techStack": [
      "Prometheus",
      "Monitoring"
    ],
    "description": "Repository for learning and implementing Prometheus monitoring in Kubernetes environments.",
    "link": {
      "label": "github.com/NotHarshhaa/Learning-Prometheus",
      "href": "https://github.com/NotHarshhaa/Learning-Prometheus"
    },
    "stars": 16,
    "forks": 31,
    "issues": 0,
    "lastUpdated": "2025-04-17T02:18:02Z",
    "lastCommit": "c79e4344f3531c08ab27ced74bfa2b018d8fe4e0"
  },
  {
    "title": "Kubernetes Mastery Guide",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Comprehensive Kubernetes learning and deployment repository from basic to advanced.",
    "link": {
      "label": "github.com/NotHarshhaa/Kubernetes",
      "href": "https://github.com/NotHarshhaa/Kubernetes"
    },
    "stars": 158,
    "forks": 187,
    "issues": 0,
    "lastUpdated": "2025-07-11T16:53:48Z",
    "lastCommit": "eb392ed77959fe8147848a94e1c83caab235b9b5"
  },
  {
    "title": "DevOps Setup & Installation Guides",
    "techStack": [
      "DevOps"
    ],
    "description": "Guides for installing and setting up essential DevOps and DevSecOps tools.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps_Setup-Installations",
      "href": "https://github.com/NotHarshhaa/DevOps_Setup-Installations"
    },
    "stars": 156,
    "forks": 170,
    "issues": 0,
    "lastUpdated": "2025-07-15T16:19:07Z",
    "lastCommit": "e45b81866db44b6a9662aa68b49a0ae4e1b93409"
  },
  {
    "title": "DevOps Tool Installer Scripts",
    "techStack": [
      "Automation"
    ],
    "description": "Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Tool-Installer",
      "href": "https://github.com/NotHarshhaa/DevOps-Tool-Installer"
    },
    "stars": 48,
    "forks": 53,
    "issues": 0,
    "lastUpdated": "2025-07-11T16:54:30Z",
    "lastCommit": "79c2ccc1695744802268809c0851844ee7db6001"
  },
  {
    "title": "Kubernetes Learning Path",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Step-by-step Kubernetes learning path from beginner to advanced.",
    "link": {
      "label": "github.com/NotHarshhaa/kubernetes-learning-path",
      "href": "https://github.com/NotHarshhaa/kubernetes-learning-path"
    },
    "stars": 338,
    "forks": 169,
    "issues": 2,
    "lastUpdated": "2025-07-12T14:24:05Z",
    "lastCommit": "734c2cf7233dcca42bbb66203b764f4a462e00dd"
  },
  {
    "title": "AWS Infra with Jenkins and Terraform",
    "techStack": [
      "Jenkins",
      "Terraform",
      "AWS"
    ],
    "description": "Terraform scripts for AWS infrastructure provisioning with Jenkins integration.",
    "link": {
      "label": "github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra",
      "href": "https://github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra"
    },
    "stars": 9,
    "forks": 20,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:10:14Z",
    "lastCommit": "2fec48f59b8ea0a59f03314763fe18fc4fe05fbd"
  },
  {
    "title": "Azure Cloud Resources Hub",
    "techStack": [
      "Azure"
    ],
    "description": "Curated list of Azure resources, libraries, guides, and blogs.",
    "link": {
      "label": "github.com/NotHarshhaa/azure-all_in_one",
      "href": "https://github.com/NotHarshhaa/azure-all_in_one"
    },
    "stars": 77,
    "forks": 55,
    "issues": 0,
    "lastUpdated": "2025-05-06T13:08:25Z",
    "lastCommit": "c5d20e6f4d6006e8d87d54b0f9e264360e18c4c3"
  },
  {
    "title": "AWS Billing Alert with Terraform",
    "techStack": [
      "Terraform",
      "AWS"
    ],
    "description": "Terraform module for setting up AWS billing alerts.",
    "link": {
      "label": "github.com/NotHarshhaa/aws-billing-alert-terraform",
      "href": "https://github.com/NotHarshhaa/aws-billing-alert-terraform"
    },
    "stars": 49,
    "forks": 48,
    "issues": 0,
    "lastUpdated": "2025-07-14T04:31:16Z",
    "lastCommit": "360677ff36bf88d19ac92002c0285807e4c604bb"
  },
  {
    "title": "Real-Time AWS DevOps Deployment",
    "techStack": [
      "AWS",
      "DevOps"
    ],
    "description": "End-to-end AWS DevOps deployment pipeline from Dev to Production.",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment",
      "href": "https://github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment"
    },
    "stars": 24,
    "forks": 46,
    "issues": 0,
    "lastUpdated": "2025-04-30T08:38:57Z",
    "lastCommit": "fc3b67f8c40d779988b71b25120f49bf14922842"
  },
  {
    "title": "DevOps Cheatsheet",
    "techStack": [
      "DevOps"
    ],
    "description": "Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-cheatsheet",
      "href": "https://github.com/NotHarshhaa/devops-cheatsheet"
    },
    "stars": 192,
    "forks": 136,
    "issues": 0,
    "lastUpdated": "2025-07-11T20:57:38Z",
    "lastCommit": "ffb1bb1ad5d411f9f34ef45daa8336e2a9481234"
  },
  {
    "title": "DevOps Interview Questions",
    "techStack": [
      "DevOps",
      "Interview"
    ],
    "description": "550+ DevOps interview questions with detailed answers covering CI/CD, Kubernetes, Terraform, and cloud.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Interview-Questions",
      "href": "https://github.com/NotHarshhaa/DevOps-Interview-Questions"
    },
    "stars": 316,
    "forks": 236,
    "issues": 2,
    "lastUpdated": "2025-07-16T10:50:29Z",
    "lastCommit": "dabc4a8da7066ab0126ab99298d5747d81fe3ca7"
  },
  {
    "title": "Into the DevOps",
    "techStack": [
      "DevOps"
    ],
    "description": "Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and more.",
    "link": {
      "label": "github.com/NotHarshhaa/into-the-devops",
      "href": "https://github.com/NotHarshhaa/into-the-devops"
    },
    "stars": 690,
    "forks": 429,
    "issues": 0,
    "lastUpdated": "2025-07-16T00:01:53Z",
    "lastCommit": "1fef40a47764021ca15eb1e227502a6e64787176"
  },
  {
    "title": "From Docker to Kubernetes",
    "techStack": [
      "Docker",
      "Kubernetes"
    ],
    "description": "A comprehensive open source learning platform end-to-end from Docker to Kubernetes for containerized applications.",
    "link": {
      "label": "github.com/NotHarshhaa/From-Docker-to-Kubernetes",
      "href": "https://github.com/NotHarshhaa/From-Docker-to-Kubernetes"
    },
    "stars": 9,
    "forks": 6,
    "issues": 1,
    "lastUpdated": "2025-07-12T10:17:23Z",
    "lastCommit": "e273ab199452670522e5cace6fa7009a6b42c717"
  },
  {
    "title": "DevOps Engineering",
    "techStack": [
      "DevOps",
      "Engineering"
    ],
    "description": "A comprehensive guide to DevOps engineering, covering the entire lifecycle of a software project from development to deployment.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Engineering",
      "href": "https://github.com/NotHarshhaa/DevOps-Engineering"
    },
    "stars": 1,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2025-06-05T13:05:16Z",
    "lastCommit": "8a3028aa42018eb61e9f691d5e332019c4d9a2b1"
  }
];
