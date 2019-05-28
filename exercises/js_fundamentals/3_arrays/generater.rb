copy_and_paste = <<~NAMES
1	Array Copy Part 1	Not completed
2	Array Copy Part 2	Not completed
3	Array Concat Part 1	Not completed
4	Array Concat Part 2	Not completed
5	Array Pop and Push	Not completed
6	Array and String Reverse	Not completed
7	Array Shift and Unshift	Not completed
8	Array Slice and Splice	Not completed
9	Oddities	Not completed
10	Array Comparison	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')
