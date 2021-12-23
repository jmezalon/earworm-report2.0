class Song < ApplicationRecord
  belongs_to :user
  belongs_to :genre
  has_many :favorites
end
