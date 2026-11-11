variable "aws_region" {
  description = "AWS deployment region"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "talent-hunt"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}
variable "db_username" {
  description = "MySQL database username"
  type        = string
  default     = "admin"
}

variable "db_password" {
  description = "MySQL database password"
  type        = string
  sensitive   = true
}