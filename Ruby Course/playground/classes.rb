class Book
    attr_accessor :title, :author, :pageCount

    def initialize(title_init, author_init, pageCount_init)
        @title = title_init
        @author = author_init
        @pageCount = pageCount_init
    end

    def getDetails
        return [@title, @author, @pageCount]
    end
end

book1 = Book.new('Harry Potter', 'JK Rowling', 500)
puts book1.getDetails

# Inheritance
class EBook < Book
    attr_accessor :website, :isFree

    def setEbookDetails(site, isFree)
        @website = site
        @isFree = isFree
    end

    def getEbookDetails
        return [@website, @isFree]
    end
end

ebook1 = EBook.new('Percy Jackson', 'Rick Riordan', 200)
ebook1.setEbookDetails('goodreads.com', false)
puts ebook1.getDetails
puts ebook1.getEbookDetails


