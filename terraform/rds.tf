# RDS subnet group
resource "aws_db_subnet_group" "mysql" {
  name = "${var.project_name}-db-subnet-group"
  subnet_ids = [
    aws_subnet.private_a.id,
    aws_subnet.private_b.id
  ]

  tags = {
    Name = "${var.project_name}-db-subnet-group"
  }
}

# MySQL RDS database
resource "aws_db_instance" "mysql" {
  identifier     = "${var.project_name}-mysql-db"
  engine         = "mysql"
  engine_version = "8.0.46"
  instance_class = "db.t3.micro"

  allocated_storage = 20
  storage_type      = "gp3"
  storage_encrypted = true

  db_name  = "talent_hunt_db"
  username = var.db_username
  password = var.db_password

  db_subnet_group_name   = aws_db_subnet_group.mysql.name
  vpc_security_group_ids = [aws_security_group.db_sg.id]

  publicly_accessible = false
  multi_az            = false

  skip_final_snapshot = true
  deletion_protection = false

  tags = {
    Name        = "${var.project_name}-mysql"
    Environment = var.environment
  }
}