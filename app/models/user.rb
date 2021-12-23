class User < ApplicationRecord
    has_many :songs 
    has_many :favorites 
    has_many :comments
    validates :username, uniqueness: true
end
