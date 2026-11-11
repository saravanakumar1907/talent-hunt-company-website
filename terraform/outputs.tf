output "vpc_id" {
  description = "Created VPC ID"
  value       = aws_vpc.main.id
}

output "public_subnet_id" {
  description = "Public subnet ID"
  value       = aws_subnet.public.id
}

output "ec2_public_ip" {
  description = "EC2 public IP address"
  value       = aws_instance.web_server.public_ip
}

output "rds_endpoint" {
  description = "MySQL RDS endpoint"
  value       = aws_db_instance.mysql.endpoint
}

output "rds_database_name" {
  description = "MySQL database name"
  value       = aws_db_instance.mysql.db_name
}