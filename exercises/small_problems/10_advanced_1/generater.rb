copy_and_paste = <<~NAMES
1	Madlibs Revisited	Not completed
2	Transpose 3x3	Not completed
3	Transpose MxN	Not completed
4	Rotating Matrices	Not completed
5	Merge Sorted Lists	Not completed
6	Merge Sort	Not completed
7	Binary Search	Not completed
NAMES

require 'fileutils'

def generate_file_names(copies, file_type)
  copies.split(/\s+Not completed\n/).each do |file|
    FileUtils.touch(p file.gsub(/\s+/, '_') + file_type)
  end
end

generate_file_names(copy_and_paste, '.js')
