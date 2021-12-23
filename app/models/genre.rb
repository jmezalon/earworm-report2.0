class Genre < ApplicationRecord
    has_many :songs
    validates :genre_name, uniqueness: true
end
