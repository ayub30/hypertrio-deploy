location = "eu-west-2"

# VPC & Networking
vpc_name                  = "hypertrio-vpc"
vpc_cidr_block            = "10.0.0.0/16"
public_subnet_cidrs       = ["10.0.1.0/24", "10.0.2.0/24"]
subnet_availability_zones = ["us-east-1a", "us-east-1b"]

# ECS & App
ecs_name       = "hypertrio"
ecs_family     = "hypertrio-task"
service_name   = "hypertrio-service"
domain        = "ayubmacalim.com"
container_img = "206218410875.dkr.ecr.eu-west-2.amazonaws.com/hypertrio:latest"
exec_role     = "ecsTaskExecutionRole"
cpu           = 1024
memory        = 3072
dns_name = "app.hypertrio.ayubmacalim.com"
dns_hosted_zone = "hypertrio.ayubmacalim.com"


# ALB
alb_name = "hypertrio-alb"
tg_name  = "hypertrio-target-group"

