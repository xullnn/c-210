copy_and_paste = <<~NAMES
1	Ddaaiillyy ddoouubbllee	Not completed
2	Bannerizer	Not completed
3	Stringy Strings	Not completed
4	Fibonacci Number Location by Length	Not completed
5	Right Triangles	Not completed
6	Madlibs	Not completed
7	Double Doubles	Not completed
8	Grade Book	Not completed
9	Clean Up the Words	Not completed
10	What Century is That	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')
