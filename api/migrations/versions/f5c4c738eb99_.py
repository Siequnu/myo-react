"""empty message

Revision ID: f5c4c738eb99
Revises: bf4bd2de74b3
Create Date: 2021-06-15 13:05:53.684692

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'f5c4c738eb99'
down_revision = 'bf4bd2de74b3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spark_activity_set')
    op.add_column('spark_plan', sa.Column('completed', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('spark_plan', 'completed')
    op.create_table('spark_activity_set',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('activity_set_json', mysql.VARCHAR(collation='utf8_bin', length=5000), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='spark_activity_set_ibfk_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_collate='utf8_bin',
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    # ### end Alembic commands ###
