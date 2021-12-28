class User < ApplicationRecord
    has_many :songs, dependent: :destroy 
    has_many :favorites, dependent: :destroy 
    has_many :comments, dependent: :destroy
    validates :username, uniqueness: true
end
