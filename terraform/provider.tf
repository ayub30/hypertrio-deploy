terraform {
  backend "s3" {
    bucket         = "hypertrio-terraformm"  
    key            = "terraform/terraform.tfstate"
    region         = "eu-west-2"
  }
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  required_version = ">= 1.3.0"
}

provider "aws" {
  region = var.location
}
